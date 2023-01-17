import React from "react"
import   "./Dashboard.css"

export default function ProgressIcon({ percentProgress }) {
  return (
      <svg className="progress-svg" stroke-dashoffset="0" stroke="#ff88cc" stroke-linecap="round" stroke-width="35" fill='none' class="bi bi-grid" height="256" viewBox="0 0 256 256" width="256" xmlns="http://www.w3.org/2000/svg">
          <defs>
              <linearGradient id="linearColors" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="5%" stop-color="#01E400"></stop>
                  <stop offset="25%" stop-color="#FEFF01"></stop>
                  <stop offset="40%" stop-color="#FF7E00"></stop>
                  <stop offset="60%" stop-color="#FB0300"></stop>
                  <stop offset="80%" stop-color="#9B004A"></stop>
                  <stop offset="100%" stop-color="#7D0022"></stop>
              </linearGradient>
          </defs>
          <circle r="100" cx="128" cy="128" stroke-dashoffset={(1-percentProgress) * 640} stroke-dasharray="640" stroke="url(#linearColors)" />
          <circle r="100" cx="128" cy="128" opacity="0.2" />
      </svg>
  )
}