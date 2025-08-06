# HubSpot Form Integration Setup Guide

## Overview
This guide will help you set up HubSpot forms on your landing page to capture leads directly into your HubSpot CRM.

## Prerequisites
- A HubSpot account (free or paid)
- Access to your HubSpot Portal ID
- Created forms in HubSpot

## Step 1: Get Your HubSpot Portal ID
1. Log in to your HubSpot account
2. Click on the Settings icon (gear) in the main navigation
3. In the left sidebar, navigate to Account Setup > Account & Billing > Account Info
4. Copy your **Hub ID** (this is your Portal ID)

## Step 2: Create Forms in HubSpot
1. In HubSpot, navigate to Marketing > Lead Capture > Forms
2. Click "Create form" and choose either:
   - **Embedded form** (recommended for this integration)
   - **Standalone page** (not needed for this integration)
3. Design your forms with the fields you need:
   - **Contact Form**: Name, Email, Company, Message
   - **Newsletter Form**: Email, First Name, Last Name
   - **Demo Request Form**: Name, Email, Company, Phone, Message
   - **AI Launchpad Form**: Name, Email, Company, Phone, Current AI Usage, Project Timeline
   - **AWS Blueprint Form**: Name, Email, Company, Current AWS Spend, Goals
4. After creating each form, go to the form's options and copy the **Form ID**

## Step 3: Update Configuration
1. Open `/src/config/hubspot.ts`
2. Replace the placeholder values with your actual IDs:
```typescript
export const HUBSPOT_CONFIG = {
  portalId: '12345678', // Your actual Portal ID
  forms: {
    contact: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // Your Contact Form ID
    newsletter: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // Your Newsletter Form ID
    demo: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // Your Demo Form ID
    aiLaunchpad: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // Your AI Launchpad Form ID
    awsBlueprint: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' // Your AWS Blueprint Form ID
  }
};
```

## Step 4: Test the Integration
1. Run your application: `npm start`
2. Navigate to pages with forms
3. Submit a test entry
4. Check your HubSpot CRM to verify the contact was created

## Form Styling
The forms automatically inherit styles from your application. You can customize the appearance by modifying the styles in the `FormWrapper` component.

## Tracking Form Submissions
Form submissions are automatically tracked in Google Analytics (if configured). You can view these events under:
- Event Category: `engagement`
- Event Action: `form_submit`
- Event Label: Form name (e.g., 'contact', 'aiLaunchpad')

## Troubleshooting
1. **Forms not loading**: Verify your Portal ID and Form IDs are correct
2. **Styling issues**: Check the browser console for CSS conflicts
3. **Submissions not appearing**: Ensure you have proper permissions in HubSpot
4. **CORS errors**: HubSpot forms handle CORS automatically, but check if you have any browser extensions blocking scripts

## Additional Features
You can extend the integration by:
- Adding custom fields to forms
- Setting up automated workflows in HubSpot
- Adding progressive profiling
- Implementing smart content based on visitor data
- Setting up form analytics and A/B testing

## Security Notes
- Never commit your actual Portal ID and Form IDs to public repositories
- Consider using environment variables for production deployments
- HubSpot forms include built-in spam protection
