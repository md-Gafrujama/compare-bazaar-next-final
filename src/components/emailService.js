/**
 * Sends form data using Web3Forms API.
 * @param {Object} formData - The form data to send.
 * @param {string} formSource - The source/type of the form (e.g., 'Call Center Form', 'CRM Form').
 * @param {string} captchaToken - Optional reCAPTCHA token.
 * @returns {Promise} - A promise that resolves with the Web3Forms response.
 */
export const sendFormData = async (formData, formSource = 'Form Submission', captchaToken = null) => {
  try {
    // Get access key from environment variable
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      throw new Error('Web3Forms access key is not configured. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your environment variables.');
    }
    
    // Build a comprehensive message with all form fields (excluding captcha_token)
    let messageParts = [];
    
    // Basic contact information
    if (formData.firstName || formData.lastName) {
      const fullName = `${(formData.firstName || '')} ${(formData.lastName || '')}`.trim();
      if (fullName) messageParts.push(`Name: ${fullName}`);
    }
    if (formData.fullName) {
      messageParts.push(`Name: ${formData.fullName}`);
    }
    if (formData.email) {
      messageParts.push(`Email: ${formData.email}`);
    }
    if (formData.companyName || formData.company) {
      messageParts.push(`Company name: ${formData.companyName || formData.company}`);
    }
    if (formData.phoneNumber || formData.phone) {
      messageParts.push(`Phone: ${formData.phoneNumber || formData.phone}`);
    }
    if (formData.zipCode) {
      messageParts.push(`Zip code: ${formData.zipCode}`);
    }
    
    // Form-specific fields - Employee Management
    if (formData.employeeCount) messageParts.push(`Employee count: ${formData.employeeCount}`);
    if (formData.desiredFeatures) messageParts.push(`Desired features: ${formData.desiredFeatures}`);
    if (formData.otherFeatureText) messageParts.push(`Other feature: ${formData.otherFeatureText}`);
    
    // Call Center Form fields
    if (formData.importantFeature) messageParts.push(`Important feature: ${formData.importantFeature}`);
    if (formData.inboundCalls) messageParts.push(`Inbound calls: ${formData.inboundCalls}`);
    
    // Business Phone System fields
    if (formData.phoneSystemNeeds) messageParts.push(`Phone system needs: ${formData.phoneSystemNeeds}`);
    if (formData.phonesNeeded) messageParts.push(`Phones needed: ${formData.phonesNeeded}`);
    
    // GPS Fleet Management fields
    if (formData.fleetSize) messageParts.push(`Fleet size: ${formData.fleetSize}`);
    if (formData.vehicleTypes) messageParts.push(`Vehicle types: ${formData.vehicleTypes}`);
    
    // General important features (array or string)
    if (formData.importantFeatures) {
      const features = Array.isArray(formData.importantFeatures) 
        ? formData.importantFeatures.join(', ') 
        : formData.importantFeatures;
      messageParts.push(`Important features: ${features}`);
    }
    
    // Email Marketing fields
    if (formData.emailList) messageParts.push(`Email list: ${formData.emailList}`);
    if (formData.emailVolume) messageParts.push(`Email volume: ${formData.emailVolume}`);
    if (formData.emailCampaign) messageParts.push(`Email campaign: ${formData.emailCampaign}`);
    if (formData.otherServices) messageParts.push(`Other services: ${formData.otherServices}`);
    if (formData.buyingTime) messageParts.push(`Buying time: ${formData.buyingTime}`);
    if (formData.featureswithEmail) messageParts.push(`Features with email: ${formData.featureswithEmail}`);
    
    // CRM Form fields
    if (formData.usingCRM) messageParts.push(`Using CRM: ${formData.usingCRM}`);
    if (formData.employeeCountcrm) messageParts.push(`Employee count (CRM): ${formData.employeeCountcrm}`);
    if (formData.importantFeaturescrm) {
      const features = Array.isArray(formData.importantFeaturescrm)
        ? formData.importantFeaturescrm.join(', ')
        : formData.importantFeaturescrm;
      messageParts.push(`Important features (CRM): ${features}`);
    }
    if (formData.industrycrm) messageParts.push(`Industry (CRM): ${formData.industrycrm}`);
    if (formData.otherIndustry) messageParts.push(`Other industry: ${formData.otherIndustry}`);
    
    // Website Building fields
    if (formData.wdtypeofwebsite) messageParts.push(`Type of website: ${formData.wdtypeofwebsite}`);
    if (formData.wdtypeofdesign) messageParts.push(`Type of design: ${formData.wdtypeofdesign}`);
    if (formData.wdregistered) messageParts.push(`Registered: ${formData.wdregistered}`);
    if (formData.wdbusiness) messageParts.push(`Business: ${formData.wdbusiness}`);
    if (formData.wdbudget) messageParts.push(`Budget: ${formData.wdbudget}`);
    if (formData.wddecision) messageParts.push(`Decision: ${formData.wddecision}`);
    if (formData.wdadditionalFeatures) messageParts.push(`Additional features: ${formData.wdadditionalFeatures}`);
    if (formData.streetAddress) messageParts.push(`Street address: ${formData.streetAddress}`);
    if (formData.wdstate) messageParts.push(`State: ${formData.wdstate}`);
    if (formData.wdcity) messageParts.push(`City: ${formData.wdcity}`);
    
    // Payroll fields
    if (formData.payrollSolution) messageParts.push(`Payroll solution: ${formData.payrollSolution}`);
    if (formData.payrollEmployee) messageParts.push(`Payroll employee: ${formData.payrollEmployee}`);
    
    // Custom service field
    if (formData.customService) messageParts.push(`Custom service: ${formData.customService}`);

    // Prepare submission data for Web3Forms
    // Only send essential fields to prevent Web3Forms from auto-including all fields in email
    // All form data is already in the message field above
    const submissionData = {
      access_key: accessKey,
      subject: `${formSource} - Compare-Bazaar`,
      from_name: `${formData.firstName || ''} ${formData.lastName || ''}`.trim() || formData.fullName || 'Not provided',
      email: formData.email || 'Not provided',
      message: messageParts.length > 0 ? messageParts.join('\n') : 'No form data provided',
      form_source: formSource,
    };

    // NOTE: We are NOT sending captcha_token to Web3Forms to prevent it from appearing in emails.
    // The captcha is already verified on the client side before form submission.
    // Web3Forms will include ALL fields in the email, so we exclude captcha_token entirely.
    // 
    // If you need server-side captcha verification, you would need to:
    // 1. Set up your own backend to verify the captcha token
    // 2. Then send the form data to Web3Forms without the token
    // 
    // For now, we rely on client-side verification (checking that captchaValue exists)
    // and Web3Forms' built-in spam protection (honeypot, rate limiting, etc.)
    
    // Captcha token is NOT sent to Web3Forms to keep emails clean
    // if (captchaToken) {
    //   submissionData.captcha_token = captchaToken;
    // }
    
    // Note: We're NOT sending individual form fields as separate properties
    // because Web3Forms will auto-include them in the email.
    // All form data is consolidated in the 'message' field above.
    // The 'message' field contains all form data in a formatted way, excluding captcha_token.

    // Add timeout promise to handle cases where Web3Forms doesn't respond
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Request timed out')), 10000); // 10 seconds timeout
    });

    // Send the form data using Web3Forms API with timeout
    const response = await Promise.race([
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionData)
      }),
      timeoutPromise
    ]);

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || 'Form submission failed');
    }

    console.log('Form submitted successfully:', result);
    return result;
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
};
