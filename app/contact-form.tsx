'use client';

import { FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ContactForm() {
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const organisation = String(data.get('organisation') || 'Not provided');
    const service = String(data.get('service') || 'General enquiry');
    const message = String(data.get('message') || '');
    const subject = `Portfolio enquiry: ${service}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organisation: ${organisation}`,
      `Service: ${service}`,
      '',
      'Project or challenge:',
      message,
    ].join('\n');

    window.location.href = `mailto:hello@anamariaespinoza.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="contact-form" onSubmit={prepareEmail}>
    <label><span>Name</span><input type="text" name="name" autoComplete="name" required /></label>
    <label><span>Email</span><input type="email" name="email" autoComplete="email" required /></label>
    <label><span>Organisation</span><input type="text" name="organisation" autoComplete="organization" /></label>
    <label><span>What do you need?</span><select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Instructional structure</option><option>Complete digital course</option><option>Complex learning programme</option><option>Fractional learning design support</option><option>Focused advice</option><option>Free 20-minute fit call</option><option>I am not sure yet</option></select></label>
    <label className="form-message"><span>Tell me about the challenge</span><textarea name="message" rows={6} required /></label>
    <div className="form-submit"><p>Your information stays in your browser. The button opens your email app with the message ready for you to review and send.</p><button type="submit">Prepare email <ArrowUpRight size={18}/></button></div>
  </form>;
}
