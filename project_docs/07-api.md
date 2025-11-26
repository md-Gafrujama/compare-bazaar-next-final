# API Integration

## Form Submission Services

### EmailJS Integration

**Purpose**: Handle contact form submissions and send emails

**Location**: `components/emailService.js`

**Configuration Required**:
- Service ID
- Template ID  
- Public Key

**Usage Pattern**:
```javascript
import emailjs from '@emailjs/browser';

emailjs.send(
  serviceId,
  templateId,
  templateParams,
  publicKey
);
```

**Environment Variables** (if used):
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**Features**:
- Client-side email sending
- Template-based emails
- No backend server required
- Form data to email conversion

---

### Web3Forms Integration

**Purpose**: Newsletter subscriptions and form submissions

**API Endpoint**: `https://api.web3forms.com/submit`

**Current Configuration**:
- Access Key: `a8fe8c95-167c-41a6-bd53-987b128dff69`
- Used in homepage subscription form

**Usage Pattern**:
```javascript
const formData = new FormData();
formData.append("access_key", "a8fe8c95-167c-41a6-bd53-987b128dff69");
formData.append("subject", "New Subscription");
formData.append("from_name", "Subscription Form");
formData.append("message", `New user subscribed: ${email}`);
formData.append("reply_to", email);
formData.append("redirect", "");

const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  body: formData,
});
```

**Environment Variable** (recommended):
```env
WEB3FORMS_ACCESS_KEY=your_access_key
```

**Features**:
- Simple form submissions
- No CAPTCHA required
- Email notifications
- Spam protection built-in

---

## Third-Party Services

### Google reCAPTCHA

**Purpose**: Form spam prevention and bot protection

**Package**: `react-google-recaptcha`

**Installation**: Already included in package.json

**Usage Pattern**:
```javascript
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = useRef(null);

<ReCAPTCHA
  ref={recaptchaRef}
  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
  onChange={handleRecaptchaChange}
/>
```

**Environment Variable**:
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
```

**Features**:
- Bot detection
- Invisible or checkbox reCAPTCHA
- Verify before form submission
- Improve form security

---

## API Patterns

### Form Submission Flow

```
1. User fills form
2. Validate inputs (client-side)
3. Verify reCAPTCHA (if enabled)
4. Show loading state
5. Submit to API endpoint
6. Handle response
7. Show success/error message
8. Reset form (on success)
```

### Error Handling Pattern

```javascript
try {
  setLoading(true);
  const response = await fetch(apiEndpoint, {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    setSubmitted(true);
    // Show success message
    // Reset form
  } else {
    throw new Error('Submission failed');
  }
} catch (error) {
  console.error('Error:', error);
  // Show error message to user
  alert('Failed to submit. Please try again.');
} finally {
  setLoading(false);
}
```

---

### Loading States

**Pattern**:
```javascript
const [loading, setLoading] = useState(false);

<button 
  disabled={loading}
  className={loading ? 'opacity-50 cursor-not-allowed' : ''}
>
  {loading ? 'Submitting...' : 'Submit'}
</button>
```

---

### Success/Error Feedback

**Pattern**:
```javascript
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(null);

{submitted && (
  <div className="text-green-600">Success! We'll be in touch soon.</div>
)}

{error && (
  <div className="text-red-600">{error}</div>
)}
```

---

## API Security Best Practices

### Client-Side Security

1. **Never expose secrets**: Only use public keys in client code
2. **Validate inputs**: Client-side validation before submission
3. **Use HTTPS**: Always use secure connections
4. **Rate limiting**: Consider implementing rate limits
5. **reCAPTCHA**: Protect forms from spam

### Environment Variables

**Use for sensitive data**:
```env
# Public keys (safe for client-side)
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxx
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=xxx

# Private keys (should be server-side only)
EMAILJS_PRIVATE_KEY=xxx
```

---

## Future API Integrations

### Potential Additions

- [ ] **Backend API Routes**: Next.js API routes for server-side logic
- [ ] **Analytics API**: Google Analytics or similar
- [ ] **CMS API**: Content management system integration
- [ ] **Payment API**: Stripe or PayPal for premium features
- [ ] **Authentication API**: User authentication and authorization
- [ ] **Search API**: Algolia or Elasticsearch for search functionality

---

## API Documentation Links

### External Services

- [EmailJS Documentation](https://www.emailjs.com/docs)
- [Web3Forms Documentation](https://docs.web3forms.com)
- [Google reCAPTCHA Docs](https://developers.google.com/recaptcha/docs/display)

### Next.js API

- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)

---

## Testing API Integrations

### Development Testing

1. **Test form submissions**: Verify emails are received
2. **Check error handling**: Test with invalid data
3. **Verify loading states**: Ensure UI feedback works
4. **Test on different devices**: Mobile and desktop

### Production Checklist

- [ ] Environment variables configured
- [ ] API keys are valid
- [ ] Error handling tested
- [ ] Success messages clear
- [ ] Loading states work
- [ ] reCAPTCHA functioning
- [ ] Email delivery confirmed

---

**Previous**: [Styling Guide](./06-styling.md) | **Next**: [Form Handling](./08-forms.md)




