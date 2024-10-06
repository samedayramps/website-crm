import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import Button from '../components/ui/button';

interface ServiceCardProps {
  title: string
  description: string
  image: string
  link: string
}

export default function ServiceCard({ title, description, image, link }: ServiceCardProps) {
  return (
    <div className="service-card">
      <Image src={image} alt={`${title} Image`} width={600} height={400} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={link}>Learn More</Link>
    </div>
  )
}