import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = '', size = 16 }) => {
  const normalized = name.toLowerCase().trim();

  // JavaScript
  if (normalized.includes('javascript') || normalized === 'js') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <rect width="32" height="32" rx="4" fill="#F7DF1E" />
        <path
          d="M17.5 24.5C18.2 25.5 19.3 26.2 21 26.2C22.6 26.2 23.8 25.3 23.8 23.8C23.8 22.3 22.8 21.6 21 20.8L19.8 20.3C16.8 19 14.8 17.5 14.8 14C14.8 10.5 17.6 8 21.5 8C24.3 8 26.3 9.2 27.5 11.5L24.3 13.5C23.6 12.3 22.8 11.8 21.5 11.8C20.3 11.8 19.3 12.5 19.3 13.7C19.3 14.9 20.1 15.5 21.8 16.2L23 16.7C26.5 18.2 28.5 19.8 28.5 23.6C28.5 27.5 25.2 29.8 21 29.8C17 29.8 14.4 27.8 13.2 25L17.5 24.5ZM8.5 29.5H4V8H8.5V29.5Z"
          fill="#000000"
        />
      </svg>
    );
  }

  // Chakra UI
  if (normalized.includes('chakra')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <rect width="32" height="32" rx="6" fill="#319795" />
        <path
          d="M16 7C11.03 7 7 11.03 7 16C7 20.97 11.03 25 16 25C20.97 25 25 20.97 25 16C25 11.03 20.97 7 16 7ZM20.7 13.4L16.8 21.1C16.7 21.3 16.4 21.5 16.1 21.5C15.8 21.5 15.5 21.3 15.4 21.1L11.5 13.4C11.3 13.1 11.4 12.7 11.7 12.5C12 12.3 12.4 12.4 12.6 12.7L16.1 19.6L19.6 12.7C19.8 12.4 20.2 12.3 20.5 12.5C20.8 12.7 20.9 13.1 20.7 13.4Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // React & React Native
  if (normalized.includes('react')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="-11.5 -10.23174 23 20.46348"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // Node.js
  if (normalized.includes('node')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <path
          d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
          fill="#339933"
        />
        <path
          d="M16 4.5L25.5 10V21.5L16 27L6.5 21.5V10L16 4.5Z"
          fill="#026E00"
        />
        <text
          x="16"
          y="18"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="7"
          fontWeight="bold"
          fontFamily="monospace"
        >
          JS
        </text>
      </svg>
    );
  }

  // MongoDB
  if (normalized.includes('mongo')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <path
          d="M16 2C16 2 8 8.5 8 17C8 22.5 11.8 26.5 15.5 28.5V29C15.5 29.5 15.7 30 16 30C16.3 30 16.5 29.5 16.5 29V28.5C20.2 26.5 24 22.5 24 17C24 8.5 16 2 16 2Z"
          fill="#47A248"
        />
        <path
          d="M16 2V28.5C16 28.5 23.5 22.5 23.5 17C23.5 9 16 2 16 2Z"
          fill="#499D4A"
        />
        <path
          d="M16 2V28.5C16 28.5 8.5 22.5 8.5 17C8.5 9 16 2 16 2Z"
          fill="#3FA037"
        />
        <path
          d="M16 29.5C15.8 29.5 15.6 28.8 15.6 27.8C15.6 23.2 16 19.5 16 19.5C16 19.5 16.4 23.2 16.4 27.8C16.4 28.8 16.2 29.5 16 29.5Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // Express.js
  if (normalized.includes('express')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <rect width="32" height="32" rx="6" fill="#1E293B" stroke="#475569" strokeWidth="1" />
        <text
          x="16"
          y="20"
          textAnchor="middle"
          fill="#F8FAFC"
          fontSize="9"
          fontWeight="bold"
          fontFamily="monospace"
        >
          ex
        </text>
      </svg>
    );
  }

  // NestJS
  if (normalized.includes('nest')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <path
          d="M16 3L4 9V23L16 29L28 23V9L16 3Z"
          fill="#E0234E"
        />
        <path
          d="M20 9L11 15V22L20 16V9Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // Docker
  if (normalized.includes('docker')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <path
          d="M29.5 13.5C28.8 12.5 27 12.3 26 12.5C25.5 10 23.5 8 20.5 8C20.2 8 20 8.1 19.8 8.2C18.6 6.3 16.5 5 14 5C10.5 5 7.5 7.5 7 11C4.5 11.5 2.5 13.5 2.5 16C2.5 17 2.8 17.9 3.3 18.7C1.5 20.5 2.5 24 6 25C10 26.2 18 26.2 23 23C27 20.5 29.5 16.5 29.5 13.5Z"
          fill="#2496ED"
        />
        <rect x="7" y="14" width="3" height="2.5" fill="#FFFFFF" rx="0.5" />
        <rect x="11" y="14" width="3" height="2.5" fill="#FFFFFF" rx="0.5" />
        <rect x="15" y="14" width="3" height="2.5" fill="#FFFFFF" rx="0.5" />
        <rect x="11" y="10.5" width="3" height="2.5" fill="#FFFFFF" rx="0.5" />
        <rect x="15" y="10.5" width="3" height="2.5" fill="#FFFFFF" rx="0.5" />
      </svg>
    );
  }

  // Git & GitHub
  if (normalized.includes('git')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <path
          d="M30 14.5L17.5 2C16.8 1.3 15.6 1.3 14.9 2L12.5 4.4L15.6 7.5C16.3 7.3 17.2 7.5 17.8 8.1C18.5 8.8 18.7 9.8 18.4 10.6L21.4 13.6C22.2 13.3 23.2 13.5 23.9 14.2C24.8 15.1 24.8 16.5 23.9 17.4C23 18.3 21.6 18.3 20.7 17.4C20.1 16.8 19.9 15.9 20.1 15.1L17.3 12.3V20.1C17.5 20.4 17.6 20.8 17.6 21.2C17.6 22.4 16.6 23.4 15.4 23.4C14.2 23.4 13.2 22.4 13.2 21.2C13.2 20.4 13.7 19.6 14.4 19.3V11.8C13.7 11.5 13.2 10.7 13.2 9.9C13.2 9.4 13.4 8.9 13.7 8.5L10.7 5.5L2 14.2C1.3 14.9 1.3 16.1 2 16.8L14.5 29.3C15.2 30 16.4 30 17.1 29.3L29.9 16.5C30.7 15.9 30.7 15.1 30 14.5Z"
          fill="#F05032"
        />
      </svg>
    );
  }

  // Python
  if (normalized.includes('python')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <path
          d="M15.8 2C9.5 2 9.9 4.7 9.9 4.7L10 7.5H16.1V8.4H6.5C6.5 8.4 2 8 2 14.2C2 20.4 6 20.1 6 20.1H8.5V17.3C8.5 17.3 8.3 14.2 11.5 14.2H17.7C17.7 14.2 20.6 14.4 20.6 11.4V5.1C20.6 5.1 21 2 15.8 2ZM13.4 3.7C14 3.7 14.5 4.2 14.5 4.8C14.5 5.4 14 5.9 13.4 5.9C12.8 5.9 12.3 5.4 12.3 4.8C12.3 4.2 12.8 3.7 13.4 3.7Z"
          fill="#3776AB"
        />
        <path
          d="M16.2 30C22.5 30 22.1 27.3 22.1 27.3L22 24.5H15.9V23.6H25.5C25.5 23.6 30 24 30 17.8C30 11.6 26 11.9 26 11.9H23.5V14.7C23.5 14.7 23.7 17.8 20.5 17.8H14.3C14.3 17.8 11.4 17.6 11.4 20.6V26.9C11.4 26.9 11 30 16.2 30ZM18.6 28.3C18 28.3 17.5 27.8 17.5 27.2C17.5 26.6 18 26.1 18.6 26.1C19.2 26.1 19.7 26.6 19.7 27.2C19.7 27.8 19.2 28.3 18.6 28.3Z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  // Solidity
  if (normalized.includes('solidity')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <path d="M16 2L8 16L16 21L24 16L16 2Z" fill="#71717A" />
        <path d="M16 21L8 16L16 30L24 16L16 21Z" fill="#A1A1AA" />
        <path d="M16 2V21L24 16L16 2Z" fill="#52525B" />
        <path d="M16 21V30L24 16L16 21Z" fill="#71717A" />
      </svg>
    );
  }

  // C# & ASP.NET
  if (normalized.includes('c#') || normalized.includes('asp.net')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <rect width="32" height="32" rx="6" fill="#512BD4" />
        <text
          x="16"
          y="21"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="11"
          fontWeight="bold"
          fontFamily="monospace"
        >
          {normalized.includes('c#') ? 'C#' : '.NET'}
        </text>
      </svg>
    );
  }

  // SQL Server / Database
  if (normalized.includes('sql') || normalized.includes('database')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <ellipse cx="16" cy="7" rx="11" ry="4" fill="#CC292B" />
        <path d="M5 7V15C5 17.2 9.9 19 16 19C22.1 19 27 17.2 27 15V7" stroke="#CC292B" strokeWidth="2" fill="none" />
        <path d="M5 15V23C5 25.2 9.9 27 16 27C22.1 27 27 25.2 27 23V15" stroke="#CC292B" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  // Ethereum / Blockchain
  if (normalized.includes('ethereum') || normalized.includes('blockchain') || normalized.includes('ethers')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <path d="M16 2L7 16.5L16 21.5L25 16.5L16 2Z" fill="#627EEA" />
        <path d="M16 2V21.5L25 16.5L16 2Z" fill="#4968DC" />
        <path d="M16 23L7 18L16 30L25 18L16 23Z" fill="#627EEA" />
        <path d="M16 23V30L25 18L16 23Z" fill="#4968DC" />
      </svg>
    );
  }

  // AWS
  if (normalized.includes('aws')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <rect width="32" height="32" rx="6" fill="#232F3E" />
        <path
          d="M7 21C11.5 24 19.5 24 24 20"
          stroke="#FF9900"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M23 18L25 21L21.5 21.5" fill="#FF9900" />
        <text
          x="16"
          y="15"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="7"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          AWS
        </text>
      </svg>
    );
  }

  // Google
  if (normalized.includes('google')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <path
          d="M27.5 16.3C27.5 15.4 27.4 14.5 27.2 13.7H16V18.6H22.5C22.2 20.1 21.3 21.4 20 22.3V25.3H24C26.3 23.2 27.5 20.1 27.5 16.3Z"
          fill="#4285F4"
        />
        <path
          d="M16 28C19.2 28 22 26.9 24 25.3L20 22.3C18.9 23 17.6 23.5 16 23.5C12.9 23.5 10.3 21.4 9.3 18.5H5.1V21.7C7.2 25.8 11.3 28 16 28Z"
          fill="#34A853"
        />
        <path
          d="M9.3 18.5C9 17.7 8.9 16.9 8.9 16C8.9 15.1 9 14.3 9.3 13.5V10.3H5.1C4.3 11.9 3.8 13.9 3.8 16C3.8 18.1 4.3 20.1 5.1 21.7L9.3 18.5Z"
          fill="#FBBC05"
        />
        <path
          d="M16 8.5C17.8 8.5 19.3 9.1 20.5 10.3L24.1 6.7C21.9 4.7 19.2 3.5 16 3.5C11.3 3.5 7.2 5.7 5.1 9.8L9.3 13C10.3 10.1 12.9 8.5 16 8.5Z"
          fill="#EA4335"
        />
      </svg>
    );
  }

  // IBM
  if (normalized.includes('ibm')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <rect width="32" height="32" rx="6" fill="#0F172A" />
        <text
          x="16"
          y="20"
          textAnchor="middle"
          fill="#052FAD"
          fontSize="10"
          fontWeight="bold"
          fontFamily="monospace"
        >
          IBM
        </text>
      </svg>
    );
  }

  // AI / LLM / Prompt Engineering
  if (normalized.includes('ai') || normalized.includes('llm') || normalized.includes('prompt')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#10B981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`flex-shrink-0 ${className}`}
      >
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    );
  }

  // HTML5 / CSS3
  if (normalized.includes('html')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <path d="M5 2L7.5 27L16 29.5L24.5 27L27 2H5Z" fill="#E34F26" />
        <path d="M16 27.5L23 25.5L25 4.5H16V27.5Z" fill="#EF652A" />
        <path d="M16 10H10.5L11 14H16V17.5H11.5L12 21.5L16 22.5V25.5L8.5 23.5L7.5 7H16V10Z" fill="#FFFFFF" />
        <path d="M16 10H21.5L21 14H16V17.5H20.5L19.5 22.5L16 23.5V26.5L23.5 24.5L24.5 7H16V10Z" fill="#EBEBEB" />
      </svg>
    );
  }

  if (normalized.includes('css')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
      >
        <path d="M5 2L7.5 27L16 29.5L24.5 27L27 2H5Z" fill="#1572B6" />
        <path d="M16 27.5L23 25.5L25 4.5H16V27.5Z" fill="#33A9DC" />
        <text x="16" y="19" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">
          3
        </text>
      </svg>
    );
  }

  // Default fallback tech indicator
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#06B6D4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`flex-shrink-0 ${className}`}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};
