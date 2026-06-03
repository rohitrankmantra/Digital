'use client';
import React from 'react';
import SectionHeading from '@/components/SectionHeading';

export default function TestPage() {
  console.log('SectionHeading imported:', SectionHeading);
  return (
    <div>
      <SectionHeading title="Hello Test" />
    </div>
  );
}
