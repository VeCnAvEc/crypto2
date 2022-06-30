import classNames from 'classnames'
import React from 'react'
import s from './CopyElment.module.scss'
interface ICopyElementProps extends React.HTMLProps<HTMLDivElement> {
    content: string;
    copyText: string;
    link: string;
}
//0x4c9safsdfafsd2B
const CopyElement: React.FC<ICopyElementProps> = ({className, style, content, copyText, link}) => {
  return (
    <div style={{...style}} className={classNames("flex__align", s._wallet, className)}>
      <span>{content}</span>
      <svg
        onClick={() => {window.navigator.clipboard.writeText(copyText)}}
        className="_copy"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
          fill="white"
        />
        <path
          opacity="0.4"
          d="M17.1 2H12.9C9.45001 2 8.05001 3.37 8.01001 6.75H11.1C15.3 6.75 17.25 8.7 17.25 12.9V15.99C20.63 15.95 22 14.55 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z"
          fill="white"
        />
      </svg>
      <a href={link}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8.65 14.77C8.54 15.07 8.25 15.26 7.95 15.26C7.86 15.26 7.78 15.25 7.69 15.21C6.88 14.91 6.2 14.32 5.77 13.55C4.77 11.75 5.39 9.4 7.14 8.31L9.48 6.86C10.34 6.33 11.35 6.17 12.31 6.42C13.27 6.67 14.08 7.3 14.57 8.18C15.57 9.98 14.95 12.33 13.2 13.42L12.94 13.61C12.6 13.85 12.13 13.77 11.89 13.44C11.65 13.1 11.73 12.63 12.06 12.39L12.37 12.17C13.49 11.47 13.87 10.02 13.26 8.91C12.97 8.39 12.5 8.02 11.94 7.87C11.38 7.72 10.79 7.81 10.28 8.13L7.92 9.59C6.84 10.26 6.46 11.71 7.07 12.83C7.32 13.28 7.72 13.63 8.2 13.81C8.59 13.95 8.79 14.38 8.65 14.77ZM16.92 15.65L14.58 17.1C13.99 17.47 13.33 17.65 12.66 17.65C12.36 17.65 12.05 17.61 11.75 17.53C10.79 17.28 9.98 16.65 9.5 15.77C8.5 13.97 9.12 11.62 10.87 10.53L11.13 10.34C11.47 10.1 11.94 10.18 12.18 10.51C12.42 10.85 12.34 11.32 12.01 11.56L11.7 11.78C10.58 12.48 10.2 13.93 10.81 15.04C11.1 15.56 11.57 15.93 12.13 16.08C12.69 16.23 13.28 16.14 13.79 15.82L16.13 14.37C17.21 13.7 17.59 12.25 16.98 11.13C16.73 10.68 16.33 10.33 15.85 10.15C15.46 10.01 15.26 9.58 15.41 9.19C15.55 8.8 15.99 8.6 16.37 8.75C17.18 9.05 17.86 9.64 18.29 10.41C19.28 12.21 18.67 14.56 16.92 15.65Z"
            fill="white"
          />
        </svg>
      </a>
    </div>
  )
}

export default CopyElement
