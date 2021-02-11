<script>
  import { fade, slide } from 'svelte/transition'

  let active = false

  function handleClick(e) {
    e.preventDefault()
    active = !active
  }
</script>

<p on:click={handleClick}>{active ? '👇' : '👉'} 圖表怎麼讀？</p>
{#if active}
  <div in:fade={{ delay: 200 }}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 350 400"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
      xmlns:serif="http://www.serif.com/"
      style="fill-rule:evenodd;clip-rule:evenodd;"
    >
      <g>
        <g transform="matrix(1.0542,0,0,1.0542,192.123,171.068)">
          <g transform="matrix(1,0,0,1,-14.5665,43.4844)">
            <path
              d="M0,-86C0,-86 13.504,-98.88 20.532,-99.912C26.943,-100.853 35.321,-98.025 40.224,-93.734C45.483,-89.132 45.931,-77.946 50.272,-72.227C54.031,-67.274 57.369,-62.391 63.782,-60.629C74.228,-57.759 102.168,-74.167 110.324,-68.765C116.418,-64.729 118.208,-51.42 116.281,-43.066C113.996,-33.157 98.055,-23.185 92.916,-14.234C89.155,-7.684 84.748,-1.839 85.89,4.356C87.316,12.097 108.023,22.141 106.488,27.572C104.919,33.127 78.073,30.236 75.416,36.993C72.287,44.949 101.552,70.804 98.056,75.901C94.818,80.622 70.25,69.137 59.926,69.806C52.69,70.275 46.854,71.735 41.736,75.194C36.361,78.827 33.123,85.247 28.739,91.597C23.286,99.495 17.933,119.43 12.14,119.384C5.593,119.333 -0.511,84.235 -8.498,83.569C-16.833,82.874 -30.093,119.33 -37.121,118.313C-43.014,117.461 -43.088,95.176 -49.501,89.183C-54.856,84.179 -63.457,84.889 -70.348,81.946C-77.538,78.876 -84.551,75.095 -91.73,71.004C-99.401,66.633 -114.023,62.971 -114.919,56.37C-116.093,47.723 -82.742,30.797 -83.255,21.556C-83.627,14.847 -101.123,11.176 -101.869,5.166C-102.585,-0.596 -89.772,-6.854 -88.962,-13.628C-88.13,-20.588 -97.522,-28.846 -97.526,-36.12C-97.53,-42.968 -93.648,-50.148 -89.956,-56.07C-86.265,-61.992 -81.607,-68.865 -75.378,-71.653C-68.621,-74.677 -55.383,-67.64 -50.272,-72.227C-44.266,-77.617 -51.635,-102.653 -45.745,-106.599C-40.637,-110.022 -28.235,-103.42 -20.532,-99.912C-13.021,-96.491 0,-86 0,-86L0,-80C0,-80 -10.846,-79.443 -16.104,-78.362C-21.362,-77.282 -26.616,-75.634 -31.548,-73.517C-36.481,-71.4 -41.296,-68.728 -45.701,-65.661C-50.107,-62.595 -54.285,-59.008 -57.983,-55.117C-61.682,-51.227 -65.052,-46.873 -67.892,-42.317C-70.731,-37.762 -73.156,-32.818 -75.02,-27.784C-76.884,-22.751 -78.265,-17.42 -79.077,-12.114C-79.89,-6.808 -80.169,-1.309 -79.897,4.052C-79.625,9.413 -78.792,14.856 -77.446,20.052C-76.101,25.249 -74.188,30.412 -71.824,35.232C-69.46,40.051 -66.548,44.724 -63.262,48.968C-59.976,53.213 -56.183,57.204 -52.11,60.701C-48.037,64.197 -43.518,67.343 -38.824,69.948C-34.131,72.553 -29.071,74.724 -23.949,76.331C-18.827,77.938 -13.434,79.046 -8.093,79.59C-2.753,80.133 2.753,80.133 8.093,79.59C13.434,79.046 18.827,77.938 23.949,76.331C29.071,74.724 34.131,72.553 38.824,69.948C43.518,67.343 48.037,64.197 52.11,60.701C56.183,57.204 59.976,53.213 63.262,48.968C66.548,44.724 69.46,40.051 71.824,35.232C74.188,30.412 76.101,25.249 77.446,20.052C78.792,14.856 79.625,9.413 79.897,4.052C80.169,-1.309 79.89,-6.808 79.077,-12.114C78.265,-17.42 76.884,-22.751 75.02,-27.784C73.156,-32.818 70.731,-37.762 67.892,-42.317C65.052,-46.873 61.682,-51.227 57.983,-55.117C54.285,-59.008 50.107,-62.595 45.701,-65.661C41.296,-68.728 36.481,-71.4 31.548,-73.517C26.616,-75.634 21.362,-77.282 16.104,-78.362C10.846,-79.443 0,-80 0,-80L0,-86Z"
              style="fill:url(#_Radial1);fill-rule:nonzero;"
            />
          </g>
          <g transform="matrix(1,0,0,1,-14.5665,43.4844)">
            <path
              d="M0,-80C0,-80 10.846,-79.443 16.104,-78.362C21.362,-77.282 26.616,-75.634 31.548,-73.517C36.481,-71.4 41.296,-68.728 45.701,-65.661C50.107,-62.595 54.285,-59.008 57.983,-55.117C61.682,-51.227 65.052,-46.873 67.892,-42.317C70.731,-37.762 73.156,-32.818 75.02,-27.784C76.884,-22.751 78.265,-17.42 79.077,-12.114C79.89,-6.808 80.169,-1.309 79.897,4.052C79.625,9.413 78.792,14.856 77.446,20.052C76.101,25.249 74.188,30.412 71.824,35.232C69.46,40.051 66.548,44.724 63.262,48.968C59.976,53.213 56.183,57.204 52.11,60.701C48.037,64.197 43.518,67.343 38.824,69.948C34.131,72.553 29.071,74.724 23.949,76.331C18.827,77.938 13.434,79.046 8.093,79.59C2.753,80.133 -2.753,80.133 -8.093,79.59C-13.434,79.046 -18.827,77.938 -23.949,76.331C-29.071,74.724 -34.131,72.553 -38.824,69.948C-43.518,67.343 -48.037,64.197 -52.11,60.701C-56.183,57.204 -59.976,53.213 -63.262,48.968C-66.548,44.724 -69.46,40.051 -71.824,35.232C-74.188,30.412 -76.101,25.249 -77.446,20.052C-78.792,14.856 -79.625,9.413 -79.897,4.052C-80.169,-1.309 -79.89,-6.808 -79.077,-12.114C-78.265,-17.42 -76.884,-22.751 -75.02,-27.784C-73.156,-32.818 -70.731,-37.762 -67.892,-42.317C-65.052,-46.873 -61.682,-51.227 -57.983,-55.117C-54.285,-59.008 -50.107,-62.595 -45.701,-65.661C-41.296,-68.728 -36.481,-71.4 -31.548,-73.517C-26.616,-75.634 -21.362,-77.282 -16.104,-78.362C-10.846,-79.443 0,-80 0,-80L0,-60C0,-60 -7.848,-58.08 -12.078,-58.772C-17.216,-59.612 -22.848,-65.345 -28.394,-66.165C-33.685,-66.947 -40.839,-66.936 -44.559,-64.02C-48.352,-61.045 -47.544,-52.434 -50.735,-48.228C-53.748,-44.258 -60.001,-43.032 -62.8,-39.143C-65.58,-35.28 -65.222,-29.47 -67.518,-25.006C-69.92,-20.336 -75.724,-16.674 -77.101,-11.811C-78.452,-7.039 -76.168,-1.378 -75.902,3.849C-75.637,9.076 -77.337,14.939 -75.51,19.551C-73.648,24.25 -67.799,27.498 -64.642,31.708C-61.658,35.688 -59.893,40.251 -56.936,44.072C-53.979,47.892 -50.565,51.484 -46.899,54.631C-43.233,57.777 -39.166,60.608 -34.942,62.953C-30.718,65.298 -25.94,66.351 -21.554,68.698C-16.914,71.181 -12.698,77.111 -7.891,77.6C-3.085,78.089 2.161,72.786 7.284,71.631C12.182,70.526 17.252,71.457 22.153,70.606C27.12,69.744 32.136,68.335 36.883,66.45C41.692,64.541 47.472,62.854 50.807,59.183C54.206,55.442 53.732,48.21 56.936,44.072C60.139,39.933 67.901,38.688 70.029,34.351C72.156,30.013 68.682,23.188 69.702,18.047C70.696,13.036 75.957,8.59 75.902,3.849C75.847,-0.958 70.584,-5.673 69.193,-10.6C67.865,-15.301 69.653,-20.982 67.518,-25.006C65.333,-29.123 57.958,-30.506 56.011,-34.912C53.842,-39.818 59.588,-51.984 56.534,-53.739C52.102,-56.286 27.225,-29.948 22.851,-32.831C18.929,-35.414 31.202,-61.019 27.605,-64.327C25.092,-66.638 17.31,-61.441 12.481,-60.731C8.15,-60.094 0,-60 0,-60L0,-80Z"
              style="fill:url(#_Radial2);fill-rule:nonzero;"
            />
          </g>
          <g transform="matrix(1,0,0,1,-14.5665,43.4844)">
            <path
              id="m1-1"
              d="M0,-55L0,-65"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-2"
              d="M11.071,-53.874L13.084,-63.669"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-3"
              d="M21.69,-50.543L25.633,-59.732"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-4"
              d="M31.42,-45.142L37.132,-53.35"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-5"
              d="M39.864,-37.893L47.112,-44.783"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-6"
              d="M46.675,-29.093L55.162,-34.383"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-7"
              d="M51.576,-19.102L60.954,-22.575"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-8"
              d="M54.366,-8.329L64.25,-9.843"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-9"
              d="M54.929,2.786L64.917,3.292"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-10"
              d="M53.244,13.786L62.925,16.292"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-11"
              d="M49.379,24.222L58.357,28.626"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-12"
              d="M43.493,33.666L51.4,39.787"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-13"
              d="M35.825,41.732L42.339,49.319"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-14"
              d="M26.692,48.089L31.545,56.833"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-15"
              d="M16.465,52.478L19.459,62.019"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-16"
              d="M5.564,54.718L6.576,64.667"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-17"
              d="M-5.564,54.718L-6.576,64.667"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-18"
              d="M-16.465,52.478L-19.459,62.019"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-19"
              d="M-26.692,48.089L-31.545,56.833"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-20"
              d="M-35.825,41.732L-42.339,49.319"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-21"
              d="M-43.493,33.666L-51.4,39.787"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-22"
              d="M-49.379,24.222L-58.357,28.626"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-23"
              d="M-53.244,13.786L-62.925,16.292"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-24"
              d="M-54.929,2.786L-64.917,3.292"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-25"
              d="M-54.366,-8.329L-64.25,-9.843"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-26"
              d="M-51.576,-19.102L-60.954,-22.575"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-27"
              d="M-46.675,-29.093L-55.162,-34.383"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-28"
              d="M-39.864,-37.893L-47.112,-44.783"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-29"
              d="M-31.42,-45.142L-37.132,-53.35"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-30"
              d="M-21.69,-50.543L-25.633,-59.732"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
            <path
              id="m1-31"
              d="M-11.071,-53.874L-13.084,-63.669"
              style="fill:none;fill-rule:nonzero;stroke:rgb(45,45,45);stroke-opacity:0.2;stroke-width:1px;"
            />
          </g>
          <g transform="matrix(1,0,0,1,-14.5665,43.4844)">
            <g transform="matrix(0.948584,-0,-0,0.948584,-167.678,-205.756)">
              <use
                xlink:href="#_Image3"
                x="233.987"
                y="152.706"
                width="20.434px"
                height="20.434px"
                transform="matrix(0.97303,0,0,0.97303,0,0)"
              />
            </g>
            <g transform="matrix(0.948584,-0,-0,0.948584,-167.678,-205.756)">
              <use
                xlink:href="#_Image3"
                x="248.982"
                y="250.592"
                width="20.434px"
                height="20.434px"
                transform="matrix(0.97303,0,0,0.97303,0,0)"
              />
            </g>
            <g transform="matrix(0.948584,-0,-0,0.948584,-167.678,-205.756)">
              <use
                xlink:href="#_Image3"
                x="227.623"
                y="278.186"
                width="20.434px"
                height="20.434px"
                transform="matrix(0.97303,0,0,0.97303,0,0)"
              />
            </g>
            <g transform="matrix(0.948584,-0,-0,0.948584,-167.678,-205.756)">
              <use
                xlink:href="#_Image3"
                x="162.397"
                y="298.65"
                width="20.434px"
                height="20.434px"
                transform="matrix(0.97303,0,0,0.97303,0,0)"
              />
            </g>
            <g transform="matrix(0.948584,-0,-0,0.948584,-167.678,-205.756)">
              <use
                xlink:href="#_Image3"
                x="87.259"
                y="234.146"
                width="20.434px"
                height="20.434px"
                transform="matrix(0.97303,0,0,0.97303,0,0)"
              />
            </g>
            <g transform="matrix(0.948584,-0,-0,0.948584,-167.678,-205.756)">
              <use
                xlink:href="#_Image3"
                x="85.492"
                y="199.296"
                width="20.434px"
                height="20.434px"
                transform="matrix(0.97303,0,0,0.97303,0,0)"
              />
            </g>
            <g transform="matrix(0.948584,-0,-0,0.948584,-167.678,-205.756)">
              <use
                xlink:href="#_Image3"
                x="121.652"
                y="141.282"
                width="20.434px"
                height="20.434px"
                transform="matrix(0.97303,0,0,0.97303,0,0)"
              />
            </g>
          </g>
          <g transform="matrix(1,0,0,1,-14.5665,43.4844)">
            <circle cx="57.983" cy="-55.117" r="4" style="fill:rgb(22,21,25);" />
            <circle cx="71.824" cy="35.232" r="4" style="fill:rgb(22,21,25);" />
            <circle cx="52.11" cy="60.701" r="4" style="fill:rgb(22,21,25);" />
            <circle cx="-8.093" cy="79.59" r="4" style="fill:rgb(22,21,25);" />
            <circle cx="-77.446" cy="20.052" r="4" style="fill:rgb(22,21,25);" />
            <circle cx="-79.077" cy="-12.114" r="4" style="fill:rgb(22,21,25);" />
            <circle cx="-45.701" cy="-65.661" r="4" style="fill:rgb(22,21,25);" />
          </g>
          <g transform="matrix(1,0,0,1,-14.5665,43.4844)">
            <g transform="matrix(0.948584,-0,-0,0.948584,-167.678,-205.756)">
              <use
                xlink:href="#_Image4"
                x="184.337"
                y="164.005"
                width="18.325px"
                height="18.325px"
                transform="matrix(0.964485,0,0,0.964485,0,0)"
              />
            </g>
            <g transform="matrix(0.948584,-0,-0,0.948584,-167.678,-205.756)">
              <use
                xlink:href="#_Image5"
                x="120.861"
                y="162.41"
                width="116.314px"
                height="115.168px"
                transform="matrix(0.994136,0,0,0.992829,0,0)"
              />
            </g>
          </g>
          <g transform="matrix(1,0,0,1,-14.5665,43.4844)">
            <circle cx="9.662" cy="-47.017" r="3" style="fill:rgb(209,36,64);fill-opacity:0.9;" />
            <circle cx="34.79" cy="-33.07" r="3" style="fill:rgb(209,36,64);fill-opacity:0.9;" />
            <circle cx="40.735" cy="-25.39" r="3" style="fill:rgb(66,49,71);fill-opacity:0.9;" />
            <circle cx="45.012" cy="-16.671" r="3" style="fill:rgb(209,36,64);fill-opacity:0.9;" />
            <circle cx="47.446" cy="-7.269" r="3" style="fill:rgb(209,36,64);fill-opacity:0.9;" />
            <circle cx="47.938" cy="2.431" r="3" style="fill:rgb(209,36,64);fill-opacity:0.9;" />
            <circle cx="46.468" cy="12.031" r="3" style="fill:rgb(209,36,64);fill-opacity:0.9;" />
            <circle cx="37.957" cy="29.381" r="3" style="fill:rgb(209,36,64);fill-opacity:0.9;" />
            <circle cx="23.294" cy="41.969" r="3" style="fill:rgb(209,36,64);fill-opacity:0.9;" />
            <circle cx="4.856" cy="47.754" r="3" style="fill:rgb(209,36,64);fill-opacity:0.9;" />
            <circle cx="-4.856" cy="47.754" r="3" style="fill:rgb(209,36,64);fill-opacity:0.9;" />
            <circle cx="-14.369" cy="45.799" r="3" style="fill:rgb(66,49,71);fill-opacity:0.9;" />
            <circle cx="-23.294" cy="41.969" r="3" style="fill:rgb(209,36,64);fill-opacity:0.9;" />
            <circle cx="-31.266" cy="36.42" r="3" style="fill:rgb(209,36,64);fill-opacity:0.9;" />
            <circle cx="-37.957" cy="29.381" r="3" style="fill:rgb(209,36,64);fill-opacity:0.9;" />
            <circle cx="-43.095" cy="21.139" r="3" style="fill:rgb(209,36,64);fill-opacity:0.9;" />
            <circle cx="-45.012" cy="-16.671" r="3" style="fill:rgb(209,36,64);fill-opacity:0.9;" />
            <circle cx="-40.735" cy="-25.39" r="3" style="fill:rgb(209,36,64);fill-opacity:0.9;" />
            <circle cx="-34.79" cy="-33.07" r="3" style="fill:rgb(209,36,64);fill-opacity:0.9;" />
            <circle cx="-27.421" cy="-39.397" r="3" style="fill:rgb(209,36,64);fill-opacity:0.9;" />
            <circle cx="-18.929" cy="-44.11" r="3" style="fill:rgb(66,49,71);fill-opacity:0.9;" />
          </g>
        </g>
        <use
          xlink:href="#_Image6"
          x="117.342"
          y="86.085"
          width="37.436px"
          height="37.436px"
          transform="matrix(0.98515,0,0,0.98515,0,0)"
        />
        <use
          xlink:href="#_Image7"
          x="192.424"
          y="173.269"
          width="26.271px"
          height="26.271px"
          transform="matrix(0.972995,0,0,0.972995,0,0)"
        />
        <use
          xlink:href="#_Image7"
          x="168.173"
          y="144.283"
          width="26.271px"
          height="26.271px"
          transform="matrix(0.972995,0,0,0.972995,0,0)"
        />
        <use
          xlink:href="#_Image8"
          x="138.811"
          y="239.948"
          width="42.335px"
          height="42.335px"
          transform="matrix(0.984533,0,0,0.984533,0,0)"
        />
        <use
          xlink:href="#_Image9"
          x="219.435"
          y="269.518"
          width="33.338px"
          height="33.338px"
          transform="matrix(0.980527,0,0,0.980527,0,0)"
        />
        <use
          xlink:href="#_Image10"
          x="44.605"
          y="67.917"
          width="73.84px"
          height="20.82px"
          transform="matrix(0.997843,0,0,0.991445,0,0)"
        />
        <g transform="matrix(1,0,0,1,-5.19675,17.8956)">
          <text
            x="15.418px"
            y="83.63px"
            style="font-family:'SourceHanSerifTC-Regular', 'Source Han Serif TC', serif;font-size:10px;"
          >
            紅
            <tspan
              x="26.218px 37.018px 47.818px 58.618px 69.418px 80.218px 91.018px "
              y="83.63px 83.63px 83.63px 83.63px 83.63px 83.63px 83.63px "
            >
              色面積高度代表
            </tspan>
          </text>
          <text
            x="15.418px"
            y="93.63px"
            style="font-family:'SourceHanSerifTC-Regular', 'Source Han Serif TC', serif;font-size:10px;"
          >
            該
            <tspan x="26.218px " y="93.63px ">日</tspan>
          </text>
          <text
            x="37.018px"
            y="93.63px"
            style="font-family:'SourceHanSerifTC-Bold', 'Source Han Serif TC', serif;font-weight:700;font-size:10px;fill:rgb(217,58,102);"
          >
            宜
            <tspan x="47.818px " y="93.63px ">事</tspan>
          </text>
          <text
            x="58.618px"
            y="93.63px"
            style="font-family:'SourceHanSerifTC-Regular', 'Source Han Serif TC', serif;font-size:10px;"
          >
            數
            <tspan x="69.418px " y="93.63px ">量</tspan>
          </text>
        </g>
        <g transform="matrix(1,0,0,1,238.72,8.99356)">
          <text
            x="15.418px"
            y="83.63px"
            style="font-family:'SourceHanSerifTC-Regular', 'Source Han Serif TC', serif;font-size:10px;"
          >
            黑
            <tspan
              x="26.218px 37.018px 47.818px 58.618px 69.418px 80.218px 91.018px "
              y="83.63px 83.63px 83.63px 83.63px 83.63px 83.63px 83.63px "
            >
              色面積高度代表
            </tspan>
          </text>
          <text
            x="15.418px"
            y="93.63px"
            style="font-family:'SourceHanSerifTC-Regular', 'Source Han Serif TC', serif;font-size:10px;"
          >
            該
            <tspan x="26.218px " y="93.63px ">日</tspan>
          </text>
          <text
            x="37.018px"
            y="93.63px"
            style="font-family:'SourceHanSerifTC-Bold', 'Source Han Serif TC', serif;font-weight:700;font-size:10px;fill:rgb(21,13,13);"
          >
            忌
            <tspan x="47.818px " y="93.63px ">事</tspan>
          </text>
          <text
            x="58.618px"
            y="93.63px"
            style="font-family:'SourceHanSerifTC-Regular', 'Source Han Serif TC', serif;font-size:10px;"
          >
            數
            <tspan x="69.418px " y="93.63px ">量</tspan>
          </text>
        </g>
        <g transform="matrix(1,0,0,1,138.368,-33.1383)">
          <text
            x="15.418px"
            y="83.63px"
            style="font-family:'SourceHanSerifTC-Regular', 'Source Han Serif TC', serif;font-size:10px;"
          >
            內
            <tspan x="26.218px 37.018px 47.818px 58.618px 69.418px " y="83.63px 83.63px 83.63px 83.63px 83.63px ">
              圈的線條是
            </tspan>
          </text>
          <text
            x="80.218px"
            y="83.63px"
            style="font-family:'SourceHanSerifTC-Bold', 'Source Han Serif TC', serif;font-weight:700;font-size:10px;"
          >
            日
          </text>
          <text
            x="91.018px"
            y="83.63px"
            style="font-family:'SourceHanSerifTC-Regular', 'Source Han Serif TC', serif;font-size:10px;"
          >
            的
            <tspan x="101.818px 112.618px " y="83.63px 83.63px ">刻度</tspan>
          </text>
          <path
            d="M29.438,93.12C29.428,92.52 29.418,91.93 29.418,91.34L29.418,88.16L29.458,86.61L29.308,86.49L27.148,87.05L27.148,87.41L28.648,87.24L28.648,91.34C28.648,91.93 28.638,92.52 28.628,93.12L27.048,93.31L27.048,93.63L30.998,93.63L30.998,93.31L29.438,93.12Z"
          />
          <text
            x="15.418px"
            y="93.63px"
            style="font-family:'SourceHanSerifTC-Regular', 'Source Han Serif TC', serif;font-size:10px;"
          >
            從
            <tspan
              x="32.408px 43.208px 54.008px 64.808px 75.608px 86.408px 97.208px 108.008px "
              y="93.63px 93.63px 93.63px 93.63px 93.63px 93.63px 93.63px 93.63px "
            >
              號開始順時針遞增
            </tspan>
          </text>
        </g>
        <g transform="matrix(1,0,0,1,0.561193,262.647)">
          <text
            x="15.418px"
            y="83.63px"
            style="font-family:'SourceHanSerifTC-Regular', 'Source Han Serif TC', serif;font-size:10px;"
          >
            中
            <tspan x="26.218px 37.018px " y="83.63px 83.63px ">間的</tspan>
          </text>
          <text
            x="47.818px"
            y="83.63px"
            style="font-family:'SourceHanSerifTC-Bold', 'Source Han Serif TC', serif;font-weight:700;font-size:10px;fill:rgb(217,58,102);"
          >
            紅
          </text>
          <text
            x="58.618px"
            y="83.63px"
            style="font-family:'SourceHanSerifTC-Regular', 'Source Han Serif TC', serif;font-size:10px;"
          >
            /
          </text>
          <text
            x="62.898px"
            y="83.63px"
            style="font-family:'SourceHanSerifTC-Bold', 'Source Han Serif TC', serif;font-weight:700;font-size:10px;"
          >
            黑
          </text>
          <text
            x="73.698px"
            y="83.63px"
            style="font-family:'SourceHanSerifTC-Regular', 'Source Han Serif TC', serif;font-size:10px;"
          >
            色
            <tspan x="84.498px 95.298px 106.098px 116.898px " y="83.63px 83.63px 83.63px 83.63px ">圓點代表</tspan>
          </text>
          <text
            x="15.418px"
            y="93.63px"
            style="font-family:'SourceHanSerifTC-Regular', 'Source Han Serif TC', serif;font-size:10px;"
          >
            想
            <tspan
              x="26.218px 37.018px 47.818px 58.618px 69.418px 80.218px 91.018px "
              y="93.63px 93.63px 93.63px 93.63px 93.63px 93.63px 93.63px "
            >
              做的事在該日是
            </tspan>
          </text>
          <text
            x="101.818px"
            y="93.63px"
            style="font-family:'SourceHanSerifTC-Bold', 'Source Han Serif TC', serif;font-weight:700;font-size:10px;fill:rgb(214,58,83);"
          >
            宜
          </text>
          <text
            x="112.618px"
            y="93.63px"
            style="font-family:'SourceHanSerifTC-Regular', 'Source Han Serif TC', serif;font-size:10px;"
          >
            /
          </text>
          <text
            x="116.898px"
            y="93.63px"
            style="font-family:'SourceHanSerifTC-Bold', 'Source Han Serif TC', serif;font-weight:700;font-size:10px;fill:rgb(85,70,90);"
          >
            忌
          </text>
        </g>
        <g transform="matrix(1,0,0,1,194.006,268.047)">
          <text
            x="15.418px"
            y="83.63px"
            style="font-family:'SourceHanSerifTC-Regular', 'Source Han Serif TC', serif;font-size:10px;"
          >
            較
            <tspan
              x="26.218px 37.018px 47.818px 58.618px 69.418px 80.218px 91.018px 101.818px 112.618px 123.418px 134.218px "
              y="83.63px 83.63px 83.63px 83.63px 83.63px 83.63px 83.63px 83.63px 83.63px 83.63px 83.63px "
            >
              黑的圓代表該日宜事少取
            </tspan>
          </text>
        </g>
        <use
          xlink:href="#_Image11"
          x="203.872"
          y="102.45"
          width="47.404px"
          height="65.661px"
          transform="matrix(0.987587,0,0,0.99487,0,0)"
        />
        <use
          xlink:href="#_Image12"
          x="66.746"
          y="271.169"
          width="72.309px"
          height="65.439px"
          transform="matrix(0.990532,0,0,0.991496,0,0)"
        />
        <g transform="matrix(1,0,0,1,2.85819,23.1441)">
          <g transform="matrix(1,-0,-0,1,-2.85819,-23.1441)">
            <path d="M253.815,297.442L246.75,295.857L249.721,302.461L253.815,297.442Z" style="fill:rgb(81,30,60);" />
            <path
              d="M250.764,299.133C280.775,324.413 273.88,337.798 273.88,337.798"
              style="fill:none;stroke:rgb(81,30,60);stroke-width:1.2px;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"
            />
          </g>
        </g>
        <use
          xlink:href="#_Image13"
          x="181.52"
          y="64.928"
          width="26.783px"
          height="74.674px"
          transform="matrix(0.991955,0,0,0.995657,0,0)"
        />
      </g>
      <defs>
        <radialGradient
          id="_Radial1"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-124.928,15.0067,15.8376,126.19,1.03554,5.91464)"
        >
          <stop offset="0" style="stop-color:rgb(227,227,227);stop-opacity:1" />
          <stop offset="1" style="stop-color:rgb(217,57,101);stop-opacity:1" />
        </radialGradient>
        <radialGradient
          id="_Radial2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-138.923,17.0576,17.2298,140.326,4.96098e-15,-0.00157673)"
        >
          <stop offset="0" style="stop-color:rgb(45,45,45);stop-opacity:0.99" />
          <stop offset="1" style="stop-color:rgb(215,215,215);stop-opacity:0.99" />
        </radialGradient>
        <image
          id="_Image3"
          width="21px"
          height="21px"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABgklEQVQ4jZWVYW+CQAyGH/BU4qZxJsv2///ekm3Z0CCC7ANvoccO50iay13pQ3lbSsb8ld3w2dWlDsMNWObM9gbpJsAIPoUaJE+YXdeERWAPNeBCFoCl1oXLtAUa4KK1lQ3gkAAGYAUUsrX2ubKqgTNQyWoxBrDPNBd0BWyAR2CrtZCvFagEvp0spnE7zTTXvhDoINsDD/I1wBH4lDQo+5ZR3y4QF2cp6FbAF+AZ2Ml3Ab4kCdrXssZYqUzXynQv4Cvw5KAbxZyVdam4XBzmNC30yjsBDzq3opzkL3S+cPpGmvqMfUstFbjSPXYWHMzHD1D/pZjw1oumG1rtzHr0OomPXt9gNX3bHOmLYhqaph86PzL2qcGj17cMG/oClPRtY1U+EVf/Tf5S9zc+48DYuFcFVfSNbX14Jt2n77qvUpxBu1SmFWMlL4LMfVGl9r8yTWlq+1qBf337s5pCPG3sAfdOqWHGTqf73DzNHNSk8hYN7dQv4z+TP+rPW9B7/cn/E8AP3L2tzW9fbzMAAAAASUVORK5CYII="
        />
        <image
          id="_Image4"
          width="19px"
          height="19px"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABJklEQVQ4jZ2U626DMAxGj0vaamq3vf97bq1KAe/HPmcmXDQV6VNCYg6+JcbG4+62tWdmvrq+A7G1fcClBbQaN5BDM1qCTM1YoaX560HqGgVsbDRJVJi8Ck8KcAROUtH6BAxALz317u6OmXn2LDw6Am9J5wR7AHcp528EKMkrE+wkyAdw1bzTB3f9jCZcc/easxxiwK7AJ3DR+qA9FGIOdQJmYWbgWcAL8J5gCHJLuawd0cICGPkr/BUk7LtkY1uw3EeTcjEkj2KeW6I28Bosyh9VOyW7AfjW+iPnqoVlUM+8aj3zan5p7FtgMTN39wCOCQa/1bqx3me97B3wtmkjT0+9B3jvBET+gOVBf+lsbh30XKGRf94aC88aD2PvtftsB7p4tm7aH40pqtI9pumXAAAAAElFTkSuQmCC"
        />
        <image
          id="_Image5"
          width="117px"
          height="116px"
          xlink:href="data:image/png;base64,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"
        />
        <image
          id="_Image6"
          width="38px"
          height="38px"
          xlink:href="data:image/png;base64,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"
        />
        <image
          id="_Image7"
          width="27px"
          height="27px"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADsklEQVRIibVWX0xTVxz+TuP13tZKLGmASLm9kd4ltqCLmKpJM9e+aaJJs1pYxvYCDGXLkhHDiD5Mlo3h4pPRxA180fhnpL5AFp4WEp5mowsqdMl6H+4trYGGUIK1vZfb7OwBajBSSsn1ezz3/O6X3++c830fQQWglDIA9gBgAWgAXhNC9O3Wk3Ib5hMpZ+T6naakpLQspRebs5kVt6aqPMtxCautKlZdY3/hcDmfhr75YqaOr1d2REYpZa52X279e/KvIV1brQcAQojOWcz/mq0WJZ/NOdVc/oP1bsGwu1NH/Mf7v/v1p99Ldbsp2fRUVLx16doPC4mXbbsYJi24XSMNovD4TEf4ueB2ZbA2QlaOSbbx26OH5uLyMTkmdRZ0vaaW3//g/ODF7z/8yBsvNzXc7Bs63SoGlCDvo53e4NhkZMJTtgjAZGTC0+kNjgV5H20VA8rNvqHTWxZMT0XFVjGghA6cXB5o771AKWW3Q1QEpZQdaO/tCR04udwqBpTpqahYaiNz3he+H+R9dJ2o7OUp8R8y0N7bE+R99IIvfK94pm9h6MtL7cXRVdrRJoRshzc4HuR9/13tvtz+1sf5RMoZFgPJc43+he2eUTlMRiY85xo/TofFQHI+kXICgAkAItfvNOnaar3gdo34Q6dmjSDzh07NCgddw7q2Wv/oxl3PG7KkpLQAQIMoPDaCqAiHyxkFgGRcPgoAJkops5RebCaErJ7pCD83kuxsV9szQoi+tLDYRCllTAD2ZDMrbs5ijq8/WMMguF3LnMUcf5VZcQOwmACwmqo1mK0WBWvKYCRUs9Uia6rGA+BMADSWY+fy2ZwTa2puJLh8NiewHJsAoJoAvLbaqmJqLi/KMclmJJMck/apuby411YVA5AzEUL06hr7C0rp7vHbo4eMJBsbfniYUspU19pnCCG6CQAcLudTAJiLy8eMJEtKihcAHKLw5M3i+1CQP0f/aN5UQer4euWI/3h/Qddr7v3y289GaOP9ayODBb1gbwmc6H/HwY1U/SufffvVlqoPvONnPe/Nz4rY6NQd3uB4JU69bislnXqrDDKwkHj56S6GSQsHG0ccLmf0bFfbM8HtWgagAuDkmLRvbPjh4aSkeOV/pK6CXrDX8fsfdA9evLJZBtlJuoqbrRY5n80Jai4vbkxXLYET/X23fqwsXW3EfCLlfHTjricZl48uLSw2vcqsuDVV41mOTey1VcWqa+0zDlF48snXn8/uODeW6haABQCHtVHmKknE/wNGxeUcg70hQQAAAABJRU5ErkJggg=="
        />
        <image
          id="_Image8"
          width="43px"
          height="43px"
          xlink:href="data:image/png;base64,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"
        />
        <image
          id="_Image9"
          width="34px"
          height="34px"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE4UlEQVRYhb2YS0wbRxjH/zOeXXvXXgMG44DzIC5UOaCkcIjScCD4QgiKhKo2UtRH1PZeKYcKKZWqqlJT0UuVW9UeWiWHHnJOEDk46iGRmgNp0jyooAaSGgN+BFi8xvuY6YENSRxaHAf8l1Yrjb7d+Wnm08z3/wiqEwOgAJDcBwAs9ykCsF/1h+RVJtckNdpZ3xbXJLVfpmw/JTRMCQkDABciwwXPmNye1i1j7N7STEK3jFSlUJWA0HYteiimtQyrzHuCgGgAbFs4SS74oiN4BgA8hIYpoc2MeGIAmIDQDbt0NamnR6b01B0AvGqQBlnb393YMaxJyocERCk5VkK3jdGZ1fnRx4XMHJ5tB+Bu0x5/uLUtsGtAY+qA1yPFBURRt4qXxnOTI09MffqVQdq1aNeBur2/SNRz0OT2zbSROz+en0xgPQcqkdId6oi3qI3nZMqOWty5M7H86OMpPXW7YpC3Qu3H9/mbf6aENuZLK1//tnD3ewCFCgHK5e+NHDwb8ga/5ILnZguLZ/7IT10rD/KUD7Rr0a6OYPQyAfHNFXOf3szc/wlAqUoIALBmCws3g5I6EZTUoTrZf9IRPJE39fn/BHFz4ldGPfvmirlPbmUnLmOLJKtQPGVkHwRl/3Sd7P8g5A2+nVlbvrbmmEubgdCe5s5vVeYdzJdWvnJXYjsgNpQysn9FfA08IPlOh7xB7/RqehSAeCGoXYt2De3tKQzuPnIDgH87AcoUGNx95MbQ3p5CuxbtejpI3TeLaS3DBESZM3LfoPrErESraSN3noAoMa1lGOun9DqIJqlRlXkHS46VuJ2fvL6DEACA8fxkouRYCZV5T2iSGt0A6axvixOQgG4bo6j8nHgdFXXbGCMgWmd9W99TEKZJaj8AO6mnr9YAAgAwszp/BYDtzs0oAEWmbL8tnGTKyKZrBfK4kJmzhZOUKYsB8FEAEiU0zAVfxLN7oxayuOAZSmgTANkFIWFH8GytQRzBM24ZIdEtw2skCsDiQmQ860skbfXBNkryEBrmQmQAWC4Iz1BCm2sN4uZmFoBJARRNbk8z4ont8Ydba0Wxxx9uZcQTM7mdBLBGAdi6ZYwBYG2BXQO1AmkL7BoEwNy5bQoA95ZmEgJiVWPqANar852WojG1X0Do95ZmrgPuEa9bRsqwS1e8HineFero22mK7lBH3OuR4oZduupW+hu3r53U0yMCotiqNn6BHS4DWtTGcwKimNTTI3DtxsY5MqWn7uhW8ZJM2dHeyMGzcK/nbRbrjRw6K1N2VLeKF12bAeDFCk0smav3o2r4WEBS3g1K6kTKyD7YRghyuOnAqYjScMHizt1b2YnP1hzzyWYgWHPMJS7E72Ff3TtBSR0Kyv7plJH9C69fMrLDTQfea1UafxAQKw+XH52aK2YfPh/wUhWfN/V5hXn/rJP9J+tk//sRX70zW1gYB2BWCRHojRz6PKI0XBAQK7OFxTMPlmdvlAe9BAIA88X8347giZA32BOQlNNvaK3HNKYspIv5f1C5wVa6Qx393Y1v/hiQlI8s7tx9uPzo1GYQQHWWc2xmdf7KFpZzUGPqca9H6nMt58Xx3OR3VVnO5/R/JjxTZsLDO2LCy/S0LdHntiVilNCmsrZE1uR20m1LXN/utsSmUAB8AGS82KgxAaxVOvnz+hflLkUs3vMuNgAAAABJRU5ErkJggg=="
        />
        <image
          id="_Image10"
          width="74px"
          height="21px"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAAVCAYAAADhCHhTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE8UlEQVRYheWYe0xTVxzHzyl9IY/KY6hIKZZHkY3pdGGohYIiExkzlFIogpgBgyFDEJjZdBOmQ9Esc5I4mFHinK8tDnW6DOPmXCMOmBNQ0SHDIXRVa6Eg9N7b3va3P0TTGCWLK16WfZKTm5yTe37f8z33d88vByMGAAAuQog92hxsnlaEEP1owxhbmdBpCx7vAADARgg5talbvL7fdzTs1k1N2LBhyM9MmSfTZrOANtOuFtoisFosLiwWi3DgsA1sDtvA5nAMXB53gOvIG3Cf4nlpdmSYWp6f3o0QGsYYU+Ot+1HGxSgAcOjr6vHZU7FjqfZGr2ywfzCUMhIShJCV7zTpqpOr8x88Ps/AdeQZuHxeP3+SY7+j0yQDRZDOxIjRgyJIDxNBuVMkNdlEkp4jQyPPW2jancPj9rm4CVo9p3ld8A8NOpe5blUHz5GvGY81PIpdjQKAydUlldKrzW0q3V93loDV6ujiLjjv7uXZ6u0v/OX1nNRfA2fN1COECHQ/pWCMuTC6n5IcE0m57dtSE9TVdk16V3vn5XsDg7NNJOXL4XJuTfXzOR7+amSdqjT7EsZ4xJ7rscUuRg0NDPpU5byn6r78ezZpJAOdBS4tPoF+R5MKMo7MjZ7XizEm7BEHoYf/N+ejtQf9Gk/8mNTX1aMgjUSAi5ugcUZIwKHsD4tP+ASIbo61CU/DvzJqaGDQZ1ve+0nXWzsKzSbTFO8ZwoPz4qJ2q0qzL2OMh+0lciwogpy+c21VWEdze3r/Ld0SlgPLOEXo/e38+OjPVaXZLRhjy7PQ8VgAgL01d12KKnjxtSS/SGNBVNqehv3HQgGAxaAmTlODWrJ22Zsb0mbGXpGLIqiCqLQ96mOngxkR1NSgluRJlQcTRVJL7vzkw8d3HXqJSYMeB0WQ08vTivJTghb1KMSy/rKEnI+0PRrfZxIcANiVWWszlQHRmpSgRT1bc9eljB79E5be63+KSuOzNivEMkNK0KLuiow1eRRBTh+3gADALonP2iIXRdCrZKq97ecu+I9bMDsDAPhs/amQVTLVXrkowpQRGtdUXVL5mt03Wduj8c2dn3xY7hdBfqBaXTjRv6InAQAOX2z+TPrG3GUNclEEXRSbWa3X6oR2mVx97HTwiheXnkv2j7r7SWFFIgA42GViBgEAfvny4nyFWGZID41r/nrH3rDRmu3p+LKqdkGqJKYrVRLTeWDbrnA7amUcAMCHt9e9kv7CkhaFWGYoX16cb5speq1O+I9Oy0+LNiYoxFH6FbPi1Y0nzzBzvD4D9FqdsCg2s1ouiqDzFiQf6mhuEwMA+y2pcv/qxRk7x3y5bmO1TCGO0ueEy+vtlsMTGABgf1ywQaEMWKhJlcR0FsZk1Cb6SiHZP/r2E0uK+poDc5SBC3tXzkn44f9gki1n60+FpIfGNSf6SuFBW698e82D8YeFYuPJM8Ffba/bz+Vx77xTsynHY9pzvcxIZobOi1emEsNGiW3fjSudGQDgitCoUXqtTljz7rbdAMDOKl+9IiRsVjcTYpkCAPjnv/upzGq1ONv2G++NzK4uqYxE6P6tIqLab1f139ZFJ+anJyVkKS8yIZZJKioq6N801474BokPkCNEO2ZhPW22sCxm2mNoYND1Ql/HNwgABGkhsZc2rSzLYlrwRAEAWADg2vpzc+DWvPUptgMCBnX9J/gbLbU4aaGSgggAAAAASUVORK5CYII="
        />
        <image
          id="_Image11"
          width="48px"
          height="66px"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAABCCAYAAAAR6FVNAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFGklEQVRoge3Za0yTVxjA8eeUWhBnvW86hQJSCmqETURFCrU0lXExUKAXRKoCkctA1iFmBjRzUwJo3NSIG2aKF0aWZYYFE2cal0Fw0TijMzoFUYvUYkpFULnI5dkHM6OC+r4GengX/5/74ff0nPe0PQXgaIgopG14qzra2mflKJP2JsxR/o2IQj5tEJtqq4ze2fKVpQ8fPFzgG+SfSwjpoG1iFCLySr8oUWq8Qk1aiaL+4Fd7QhCR0HYxChH5BZosQ6xbcGfywugTF2vOiWmbGGcxmV0zgrWHVSJpb25EcmFPV/dM2ibGnT99xivJN6I2zkNmK16Xr0NE7jyvx/dXfKzzUV7ReIXePFZSFkjbwzhEJGWbd8nVYnlz4rywv4yV1fNomxiHiA4l6QXqOI+QB2sWrDh19dwlD9omxiEif0tCTpZKJO3JCNYe6Whrn0XbxDhE5OdFpW5ViaR9n4evLUZEB9omxiEiPzcyZbtKJO3NV2cZOHXSPI8v0GSv5yx+szY7+x3eXv1/8Lr17/B2CxEdCjRZBpVI2sc5PADAzk+3xKlE0p4NUanbOIc/XFgaFOchs6UHqY9x6hMW4OnvV61EcUPvF1Fjs1hdaHtYZTGZXZPmh9fpvBXXz/5WK6HtYVVPV/fMdYFxP8XPllkrSsoW0/awChH5uRHJRSq34K5v1m+Npu1hFSLyvkw0pKtE0r4tCTlZnHto9+YWRsS6BXcawlbv4txxWX/xqrtWomhMDoiu5tTVB8DTfZ8p0x1Sey6z1FYZvWl7WFeclq+JEQX1b0/eqKdtYd3502e8NGJ5U9rS+ErO7XtE5Kctja/UiOUmmveVb33UOTZ3r6q/eHVTgFKaFpu5qmY4USNebZXRW+25zJIZoivn4tYRpC5WHddKFI2j4faM9RbiNT5MvnWlwbA0Up4SlaL5cyRQI5axsnpe/GyZNTs08Tsubh2HjGDtEa1EceNOw20Rbc9/8Zi+sGLHgUUtJrPaJ2D+Dhexm2kkUcMeIgpSFsVUrZwbdmG0fddhtAL7N+2Q2SzWSF+pf5HjWCfzSKOGNUR0Xv1R5O96v8g/ENGZtufl3rgCuz/7OrTd9iAkQBlUSAjptAdq2EJEQUpAzK96v4ia0fjuA7xhBU4c/Hnu/Xuty8V+c8o59+4DAOQo9Xs0XqG3R/N/Vq9cAYvJ7Gq+2RTvInb7UThpQrM9UWx65QD78opiBvr6x6syEsvtCWLbkAMgovOd+pvRk6dPO7kkXNZobxSbhhzg8pkLMzraOha7ermfJIT02hvFpiEH+GXf0eUEYEBjWGu0N4htgwZARIH5hkkpnDKxTuzrY6GBYtOgAe63tH7QZr0v/dDdxUgI6aaBYtOgAX7YunvJQH//BIU28gQNENsGDdBiMi90dHaql8WGjdqz//leGAARBe2tbZJxwvENANBFycSql1fA+XHHI/HEqZOuEUKeUBGxjA/w9G4fABxamu4Ke7q6PaZMn3aZsotxBBF5mSG6Q71Pet/DgQG+rcUa5SpxL3VyHmt1myOuSy/ccIo28nXxCCEDAifH9ta792JsLdYoAICm67fSGy79s1E4eeIj2sA3xQMA+ESv+p7weC+c+TM9XI8m5KacpcNiHg8AQJmw4trUGe8/O/f5Y/hWfX5mMSGknx6NWTwAAEJIr3/oklIAQAAAT1+fb/3lgfVUZWxDxHFJvuF1Oh/lldF29/O6nt1vEkIeb1uTd2CMYEwnl+5+/gWdXkWySvh+ggAAAABJRU5ErkJggg=="
        />
        <image
          id="_Image12"
          width="73px"
          height="66px"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABCCAYAAAAbtPsfAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGw0lEQVR4nO2ba1QU5xnHn3fY2RuLKyy3sMLCBhY0Nq6HCmoXECRUA4rAFrykoMHbiRKNJs1JiaanVhs1xpjaXGzSxmNjUxNKOG16pPESJIXEqOGoTSQQYV1kUWCXZWFnBhaffgikxBD6Jck7hvl9fefyO//zvGfed+YZAAkAAEBEf0Qcc4x8zy6iBBH9S8w5x7XBgZ/ek2x+a93OrR8RQlwj41JIAICImuIZ95/o6/EkAwAoVMrmcENE9YyUpGMrn9xQP2FDQkQ/AFAN8IK24uCRyONHKvd5enrn3n5cpCnm0IQICRFZAFB3XGvXVr7w56ltzTZzT6dzusflNnH93vgh35CWMETAW6gYOYdhGG/sjIQ9T7/98q4fXEiIyADApLP/ej+sprLa3NnWcW9Pl2tqn9sTL3i5WESUs3LWoQrw/0wbNLkxMFR3Mc48raHx/OVZlz/4eD8AgL824KMFDyx5ZMUv1tYTQm79IEJCRFVbsy309T2HLPamlkxnR9dc3svFAQFUKJVX/bWaRq0u8EqIPuzirEzLhflF2Q4A4Agh3pFrHNi8Y1HN2+8eM94T99zOt35/UKFSXh8ZuyNDGq4W7bEDr5kunP5g4Q17e4rH5U7GW6jwn6S5EDIl/N9RppgzWStyL06dda8LALyEEGG8a547VWe6WHsuYtX2slpCyNDosTsmJERUtX7SHPbGs69a2ppt93V3dM4VOD6WlbPtk0N1dRHRU04vLCk4mZRluU4I6fs27y3qkBCRaWu2RR4q35dnb2pd7HG5kxGR9ddqLoTow99PSJxeXVK+4RO5UnGTEDL4XXmIMiRE1Lz2m4OJ507WrbxxzbEY8ZZCFx5SrY81vJu9ynoqMX1O+7ddLeMhmpBGV03rlealfT2eZJVGfSnKZHzT+nDxXxPT57R8l9UyHtRDGqtqgu8Ke2f6nJlHNj7zxBlCSC9tR2ohIaJ67/ptuZfqz28arprLUSbjseGquUoI8dFyow4isi/98pmskpk57+VFWYZWJ+dV/W7rrhxE1NJ2ow4i+r35/OGkNbML/pZnsAyVmHNqXnxibxYiymm7UQcRSW3ViYSyjBWv5EencsunZV3avbZ8OSKqabuJAntTq+HR7NLfWo1prqK4DNu2wrLNAsfraXuJAkRk/rTjYOryqVmXrcY052M5q3fam1oNtL1EAyLKy60bHiuITu0vMefU/PNwhZm2k6j4sLo2fnVyXlW+IWVga3bp09LUGgUi+h3YvGNRkWm+rcg0v2X4ke5H20s0CByvfzS7dHe+IWVgzez8ynOn6ky0nUSFwPH6DWnLDudHp3JPFpZtkdY8tyFwvH69pfAvBdGp/XvWlRdJ0+s2el3uKWtmF1QUxKT17tv4VP7wm0KJEbodnZGlSUv+YTWmuZ7fsjMHEam/SRAVDtv1qAcTc6t/dve8rhce3/1TKaDbQETZQ2lLD1uN87r/sH1/Bm0f0YGIzPZlmx7ON6T4dq8tX07bR5S88tRz6QUxqX1bFq56FhFltH1ER8OZs3FL4zM/Wzlz0UlpmzEGAsfrS5Py/l4Ul2GrrTqRQNuHFuMuAP2ueoptVz5/KN268OfWsuL670vqjqHlP03RRXEZto3pK16VVtNjgIhk6/0P7rUa53XXvXN6wk6zcal+vepHBTFp7sdz1/2KtosoQUTZekvh0aXxmU3djs5I2j5i4Gsb0zf2//HHN+2OwulzZu7S3RVipyElejbdV/zisoTMRmlN9D++Ukm9LvcUR4s9Vx8bXTG602ui85WQDmzescA36NMteGDJUVpCYuTLkBBR9fmlxmWBoboT84uym2hKiY0vQ3qv4rixt7snLc487ej/6y+caIwOaR5hGO+aXz9yhqaQGGEAvvhudsPu+IlGG/BxUHhwN20psTFSSQHuLmdicETo2dG9zRJfwAAAHD9SGcV7eZMh4e4a2kJihAEAOH+qfhbDMNzKbRsbaAuJEQYAoN/tCZOxss6AyZOkqTYGDAAAz/GhMjnrBICJ28w5DgwiMoKXD2LlcicAUOmTFjsMALACx+vkKoVUSd8AAwCyAWEgUKlSOml13IsdBgBY38CgTqFWddGWESsMAMh8g4OBSrXqJm0ZscIAgGzIN6RVa9TSduQbYABgiPFj+gVemERbRqwwAOCTsayL6+sPoS0jVoZDkjkFTgimLSNWGAAYZBVyp+DlgqQvtWPDAIBPrlT0CLwQBAAsbSExwhBCfCqNuoP38hEAILUYjwEDABASEdbAe73xHdfaJ9MWEiMMAIBlceaHrFx+o7nhU+kftPFAxCDaDmLlv2/00H3Czeb7AAAAAElFTkSuQmCC"
        />
        <image
          id="_Image13"
          width="27px"
          height="75px"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAABLCAYAAACBWvyiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAElklEQVRYhdWYfUxbVRjG39PSTz46cKRAYZRW6KDiBBVkBmFjbNbBJh2zLgwmKEuXYIzED4ySRRd1QUeMUxMnZGaKcRHdlmUjEGOWsWnA4JYpZDAppHxYV0Yppb33FuT1D4WQzpWP3kPm8+d73/v+7nPynJzcA0BRiCimOX9eNU+aayszjacXAgW0YBHKtb/fstkLzjac1NNizItjWJUpKW+w2lBeP1ej5kwik47EaOJOj/RbiziGVVGFAQBkbM3+2sty6q/eb9BShxkPlAwJhMJJa69FTx0mlkpcUrnUMmEf11GHAQAjDw2xTDqcWkSUUIURQqbDIhT9HpdbAwBS2s5AKpfZ/5qZCQOAIOowRBQQAAQApA4DAAL/wKgHBBCRACGwKjBAXD1nQMgqL+NqBYSZ8kSLxKJxAJihCkNEicvhTAgOC7EAAEPbmYyZ8mhCwxX9hBC6zlwTkyEcy6ojotZeB6AckFOffJmAsyjRpaf+Rh02eL1fLxAKXQUVxTbqsAn7+HqpXDoglkpcVGGIKHaNOzXy0GALALBUYQAg80y5E0LXKCyEEC9VWGfbpSjWzSRFqpRX5mrUYOeOf7ONCATc3hpzO1UYIkpGLNatinvWXIq9N95GFWazjiqddke2Srvue0IIRxX2+aGPHpudnZUZyoznF9Z5hyGi0NprMYQoQn/OeiJ3iCrMy3JRt2z2HGV8zA+EEDdVWMPBD1KnOa8qIz/7rO8z3mF9V3oKZcHynuLny3qpwhBRYR+25UbGRl0ghDipwpqPntAxbk9KUlrKbUvIu14urHz7qcTNw3M/f77izRnHsKqhvoHdyrjoFrFUMvpfPUF8wY5UHdziZTl17i7DHkII8jX3NiFicNmG7e3PZRad8Xf3wcsyflZbv9HlcD6alpP56dzZRUWIKNqftevb0lRDByKG+OsN2FnLie/0Y3/c3J74QEojIWQq0Hl+9UJ+2cempDzLpMMZu1hvQM76rvYkjFqsJnWy9ouwcMVwILMW1WvGA68Xa3Ic1y53aZfSv2JnHMOqBrpv7ItWxzanbky3LOWdFW/qu24T+2pFy3hXbmJfLdtZU92xjLHRmwVJafoGqpsYEaXlD+5oK001dNzpzPKnZaXxPXNt0cTYeN4WU0GhRCYdWS5syZp0OGP3JOf37M8qbkZE0UpmLNnZu8/W7POy3LodlaYSQsj0SmBLUkdru263NtdebSivR6R4d4KIwqpNJY2mxM3Wge4b6kBmLfqVTXXHHhm1WPcmP3z/4QR94mAgML8KNOq+8huQ/1XUfXVHZ+9UvPqMl+XiVivqY9WPlx/5976QjviMuq8EAADXLndp59JGM+oEAODN0mpz3y/d5uyd+a90tF58acY7rWjoPGXkO4FBAADuCVeMx+Xe0NZ05hwiCnON24poRF2AiIRxe2IAABAxCADITy0X6uvMb5h4hwGAiHF7IhcWOYbT/Ppj14sdre06PmFBACDmGFY5XxCL/lyfft/ht05+yP+xj4jhT+vy+o3x2VzVppLGqxc7E3kF+MAkFQ/tPH/80NEcRBRSAy0EUocAwN89iR8cuQ8ZXgAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  </div>
{/if}

<style>
  p {
    text-align: center;
    margin: 12px 0 0 0;
    cursor: pointer;
    font-size: 18px;
  }

  div {
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
  }
</style>
