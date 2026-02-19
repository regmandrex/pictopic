'use client'

import { useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: (data.get('name') as string)?.trim(),
      email: (data.get('email') as string)?.trim(),
      subject: (data.get('subject') as string)?.trim(),
      message: (data.get('message') as string)?.trim(),
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))

      if (!res.ok) {
        setStatus('error')
        setErrorMessage(json.error || 'Failed to send message. Please try again.')
        return
      }

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name <span className="text-muted-foreground">(required)</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={status === 'sending'}
            className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email <span className="text-muted-foreground">(required)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={status === 'sending'}
            className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject <span className="text-muted-foreground">(required)</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            disabled={status === 'sending'}
            className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message <span className="text-muted-foreground">(required)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            disabled={status === 'sending'}
            className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-y disabled:opacity-60"
          />
        </div>
        {status === 'error' && (
          <p className="text-sm text-destructive font-medium">{errorMessage}</p>
        )}
        <div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:pointer-events-none"
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
        </div>
      </form>
      {status === 'success' && (
        <p className="text-sm text-green-600 dark:text-green-400 font-medium">
          Thanks for your message. We&apos;ll get back to you within 2–3 business days.
        </p>
      )}
    </div>
  )
}
