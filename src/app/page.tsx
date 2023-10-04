'use client';
import Table from '@/components/table';
import { VideoData } from '@/interfaces/videoData';
import { getData } from '@/services/getData';
import { useState } from 'react';
import Title from '@/components/title';
import SearchForm from '@/components/searchForm';

export default function Home() {
  return (
    <div className="container mx-auto flex items-center justify-center p-4">
      <div className="artboard">
        <Title />
        <br />
        <SearchForm />
      </div>
    </div>
  );
}
