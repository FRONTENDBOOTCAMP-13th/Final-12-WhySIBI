'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import styled, { css } from 'styled-components';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const mode: 'dark' | 'light' = resolvedTheme === 'dark' ? 'dark' : 'light';
  const toggle = () => setTheme(mode === 'dark' ? 'light' : 'dark');

  if (!mounted) {
    return (
      <ToggleWrapper aria-hidden title="테마" $mode="light">
        <Track $mode="light">
          <Thumb $mode="light">
            <span className="no-invert">🌓</span>
          </Thumb>
        </Track>
      </ToggleWrapper>
    );
  }

  return (
    <ToggleWrapper
      onClick={toggle}
      aria-pressed={mode === 'dark'}
      aria-label="다크모드 토글"
      title={mode === 'dark' ? '다크 모드' : '라이트 모드'}
      $mode={mode}
      data-no-invert
    >
      <Track $mode={mode}>
        <Thumb $mode={mode}>
          <span className="no-invert">{mode === 'dark' ? '🌚' : '🌝'}</span>
        </Thumb>
      </Track>
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.button<{ $mode: 'dark' | 'light' }>`
  display: inline-flex;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

const Track = styled.span<{ $mode: 'dark' | 'light' }>`
  display: inline-flex;
  align-items: center;
  width: 86px;
  height: 38px;
  border-radius: 30px;
  padding: 4px;

  ${({ $mode }) =>
    $mode === 'dark'
      ? css`
          background: rgba(20, 20, 20, 0.9);
          box-shadow:
            0 5px 10px rgba(40, 40, 40, 1),
            0 2px 4px rgba(40, 40, 40, 1);
          border: 1px solid rgba(255, 255, 255, 0.08);
        `
      : css`
          background: rgba(255, 255, 255, 0.9);
          box-shadow:
            0 5px 10px rgba(100, 100, 100, 0.15),
            0 2px 4px rgba(100, 100, 100, 0.15);
          border: 1px solid rgba(0, 0, 0, 0.08);
        `}
`;

const Thumb = styled.span<{ $mode: 'dark' | 'light' }>`
  display: inline-grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 9999px;
  font-size: 20px;
  transition:
    transform 150ms ease-out,
    background 150ms ease-out;

  ${({ $mode }) =>
    $mode === 'dark'
      ? css`
          background: #0f172a;
          color: #f1f5f9;
          transform: translateX(48px);
        `
      : css`
          background: #f8fafc;
          color: #0f172a;
          transform: translateX(0px);
        `}
`;
