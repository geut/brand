import React from 'react'

export function Logo ({ mono = false, ...props }) {
  return ( 
    <svg {...props} viewBox='0 0 400 400' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <g>
        <path d='M166.348 13.880 C 39.302 35.178,-31.644 175.558,26.231 291.129 C 96.983 432.414,298.430 433.217,370.240 292.500 C 441.993 151.897,321.909 -12.198,166.348 13.880 M242.742 31.299 C 374.253 65.526,421.396 228.729,328.239 327.281 C 234.844 426.085,69.250 388.247,28.537 258.800 C -13.452 125.298,108.057 -3.754,242.742 31.299 M174.063 78.907 L 149.258 104.839 131.361 104.839 L 113.464 104.839 106.732 131.297 L 100.000 157.755 100.000 201.405 L 100.000 245.055 131.048 277.654 C 148.125 295.583,168.810 317.304,177.016 325.922 L 191.935 341.590 191.935 356.279 L 191.935 370.968 199.194 370.968 L 206.452 370.968 206.452 355.764 L 206.452 340.560 243.145 302.139 C 263.327 281.008,284.012 259.300,289.113 253.900 L 298.387 244.081 298.387 202.959 C 298.387 162.364,298.315 161.478,292.742 133.871 C 289.637 118.490,287.097 105.665,287.097 105.372 C 287.097 105.079,278.447 104.839,267.875 104.839 L 248.654 104.839 223.761 78.907 L 198.868 52.975 174.063 78.907 M95.989 81.048 C 94.642 85.020,90.461 102.287,90.792 102.512 C 90.977 102.639,94.163 103.487,97.871 104.397 L 104.613 106.051 105.987 100.203 C 107.230 94.915,107.935 94.307,113.358 93.854 C 119.303 93.358,119.355 93.292,119.355 86.193 L 119.355 79.032 108.014 79.032 C 100.381 79.032,96.449 79.691,95.989 81.048 M280.645 86.193 C 280.645 93.272,280.713 93.359,286.557 93.854 C 291.791 94.297,292.670 95.023,294.219 100.180 L 295.968 106.006 302.419 104.125 C 309.571 102.039,309.566 102.063,305.412 87.500 L 302.997 79.032 291.821 79.032 L 280.645 79.032 280.645 86.193 M191.935 110.851 L 191.935 139.445 178.226 125.806 C 170.685 118.305,164.516 111.441,164.516 110.553 C 164.516 109.192,190.199 82.258,191.497 82.258 C 191.738 82.258,191.935 95.125,191.935 110.851 M232.180 109.715 C 232.223 110.180,226.452 116.332,219.355 123.387 L 206.452 136.215 206.463 108.833 L 206.475 81.452 219.289 95.161 C 226.337 102.702,232.138 109.251,232.180 109.715 M172.414 139.672 L 191.935 159.988 191.915 181.204 L 191.895 202.419 175.786 186.136 L 159.677 169.852 159.677 156.700 L 159.677 143.548 152.517 143.548 C 145.522 143.548,145.344 143.678,144.855 149.123 L 144.355 154.697 133.299 142.613 C 122.979 131.332,122.313 130.157,123.292 124.942 L 124.340 119.355 138.616 119.355 L 152.892 119.355 172.414 139.672 M276.139 124.117 C 276.752 128.293,275.286 130.422,264.226 141.418 L 251.613 153.957 251.613 148.752 C 251.613 143.660,251.457 143.548,244.355 143.548 L 237.097 143.548 237.097 156.080 L 237.097 168.612 221.774 183.871 L 206.452 199.130 206.452 178.218 L 206.452 157.307 225.378 138.331 L 244.304 119.355 259.872 119.355 L 275.440 119.355 276.139 124.117 M283.484 168.503 L 284.149 184.677 267.881 200.776 C 251.793 216.697,251.613 216.817,251.613 211.663 C 251.613 206.562,251.460 206.452,244.355 206.452 L 237.097 206.452 237.097 219.455 L 237.097 232.458 221.816 248.084 L 206.535 263.710 206.493 241.948 L 206.452 220.187 243.099 183.513 C 284.825 141.758,282.421 142.651,283.484 168.503 M155.439 185.522 L 191.935 222.656 191.935 242.780 C 191.935 266.898,192.633 266.715,174.351 247.398 L 159.677 231.893 159.677 219.172 L 159.677 206.452 152.419 206.452 C 145.310 206.452,145.161 206.559,145.141 211.694 C 145.121 216.876,144.939 216.751,129.012 200.652 L 112.903 184.368 112.903 173.659 C 112.903 163.079,115.791 148.387,117.870 148.387 C 118.460 148.387,135.366 165.098,155.439 185.522 M245.621 279.031 L 207.258 319.370 206.799 301.286 L 206.340 283.201 244.702 244.808 L 283.065 206.414 283.524 222.553 L 283.984 238.693 245.621 279.031 M153.674 246.448 L 191.935 284.832 191.868 302.496 L 191.800 320.161 171.303 299.068 C 160.030 287.467,142.278 268.873,131.855 257.748 L 112.903 237.522 112.903 222.793 C 112.903 214.692,113.468 208.065,114.157 208.065 C 114.847 208.065,132.630 225.337,153.674 246.448 ' />
      </g>
    </svg>
  )
}