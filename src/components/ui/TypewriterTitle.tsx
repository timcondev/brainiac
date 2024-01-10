'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';

type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString('🖼️ Quickly find your notes!')
          .pauseFor(500)
          .deleteAll()
          .typeString('🤖 AI-Powered Help!')
          .pauseFor(500)
          .start();
      }}
    />
  );
};

export default TypewriterTitle;
