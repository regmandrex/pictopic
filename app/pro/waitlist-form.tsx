'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function WaitlistForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email') as string
        if (email) {
          if (typeof window !== 'undefined') {
            const waitlist = JSON.parse(localStorage.getItem('waitlist') || '[]')
            waitlist.push({ email, date: new Date().toISOString() })
            localStorage.setItem('waitlist', JSON.stringify(waitlist))
            alert('Thanks! We\'ll notify you when Pro launches.')
            e.currentTarget.reset()
          }
        }
      }}
      className="space-y-4"
    >
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
          className="mt-2"
        />
      </div>
      <Button type="submit" className="w-full">
        Join Waitlist
      </Button>
    </form>
  )
}
