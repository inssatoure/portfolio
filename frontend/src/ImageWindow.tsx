import React from 'react';
import Image from 'next/image';
import { TerminalWindow } from './TerminalWindow';
import { TerminalWindowProps } from './TerminalWindowProps';

export const ImageWindow = ({
  srcs,
  alts,
  positions,
  ...terminalWindowProps
}: {
  srcs: string[];
  alts: string[];
  positions: (string | number)[];
} & Omit<TerminalWindowProps, 'children'>) => (
  <TerminalWindow {...terminalWindowProps}>
    <Image
      src={srcs[0]}
      alt={alts[0]}
      layout="fill"
      objectFit="contain"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: String(positions[0]),
      }}
      className="pointer-events-none"
    />
  </TerminalWindow>
);
