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
    
    // Prepare submission data for Web3Forms
    const submissionData = {
      access_key: accessKey,
      subject: `${formSource} - Compare-Bazaar`,
      from_name: `${formData.firstName || ''} ${formData.lastName || ''}`.trim() || formData.fullName || 'Not provided',
      email: formData.email || 'Not provided',
      company_name: formData.companyName || formData.company || 'Not provided',
      phone: formData.phoneNumber || formData.phone || 'Not provided',
      zip_code: formData.zipCode || 'Not provided',
      form_source: formSource,
    };

    // Add optional fields if they exist
    if (formData.phoneSystemNeeds) submissionData.phone_system_needs = formData.phoneSystemNeeds;
    if (formData.phonesNeeded) submissionData.phones_needed = formData.phonesNeeded;
    if (formData.fleetSize) submissionData.fleet_size = formData.fleetSize;
    if (formData.vehicleTypes) submissionData.vehicle_types = formData.vehicleTypes;
    if (formData.importantFeatures) submissionData.important_features = Array.isArray(formData.importantFeatures) 
      ? formData.importantFeatures.join(', ') 
      : formData.importantFeatures;
    if (formData.emailList) submissionData.email_list = formData.emailList;
    if (formData.emailVolume) submissionData.email_volume = formData.emailVolume;
    if (formData.emailCampaign) submissionData.email_campaign = formData.emailCampaign;
    if (formData.otherServices) submissionData.other_services = formData.otherServices;
    if (formData.buyingTime) submissionData.buying_time = formData.buyingTime;
    if (formData.featureswithEmail) submissionData.features_with_email = formData.featureswithEmail;
    if (formData.employeeCount) submissionData.employee_count = formData.employeeCount;
    if (formData.desiredFeatures) submissionData.desired_features = formData.desiredFeatures;
    if (formData.otherFeatureText) submissionData.other_feature_text = formData.otherFeatureText;
    if (formData.usingCRM) submissionData.using_crm = formData.usingCRM;
    if (formData.employeeCountcrm) submissionData.employee_count_crm = formData.employeeCountcrm;
    if (formData.importantFeaturescrm) submissionData.important_features_crm = Array.isArray(formData.importantFeaturescrm)
      ? formData.importantFeaturescrm.join(', ')
      : formData.importantFeaturescrm;
    if (formData.industrycrm) submissionData.industry_crm = formData.industrycrm;
    if (formData.otherIndustry) submissionData.other_industry = formData.otherIndustry;
    if (formData.customService) submissionData.custom_service = formData.customService;
    if (formData.importantFeature) submissionData.important_feature = formData.importantFeature;
    if (formData.inboundCalls) submissionData.inbound_calls = formData.inboundCalls;
    if (formData.wdtypeofwebsite) submissionData.wd_typeof_website = formData.wdtypeofwebsite;
    if (formData.wdtypeofdesign) submissionData.wd_typeof_design = formData.wdtypeofdesign;
    if (formData.wdregistered) submissionData.wd_registered = formData.wdregistered;
    if (formData.wdbusiness) submissionData.wd_business = formData.wdbusiness;
    if (formData.wdbudget) submissionData.wd_budget = formData.wdbudget;
    if (formData.wddecision) submissionData.wd_decision = formData.wddecision;
    if (formData.wdadditionalFeatures) submissionData.wd_additional_features = formData.wdadditionalFeatures;
    if (formData.streetAddress) submissionData.street_address = formData.streetAddress;
    if (formData.wdstate) submissionData.wd_state = formData.wdstate;
    if (formData.wdcity) submissionData.wd_city = formData.wdcity;
    if (formData.payrollSolution) submissionData.payroll_solution = formData.payrollSolution;
    if (formData.payrollEmployee) submissionData.payroll_employee = formData.payrollEmployee;

    // Add reCAPTCHA token if provided
    if (captchaToken) {
      submissionData.captcha_token = captchaToken;
    }

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
