import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea(props: TextareaProps) {
  return <textarea {...props} className={`form-textarea ${props.className || ''}`} />
}