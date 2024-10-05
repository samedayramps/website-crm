import React from 'react'
import { Card, CardContent } from '../components/ui/card'

interface TestimonialCardProps {
  quote: string
  author: string
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <blockquote className="text-lg italic mb-4">"{quote}"</blockquote>
        <p className="text-right font-semibold">- {author}</p>
      </CardContent>
    </Card>
  )
}