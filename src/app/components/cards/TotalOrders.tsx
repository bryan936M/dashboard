import React from "react";

type Props = {};

const TotalOrders = (props: Props) => {
  return (
    <div className='class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"'>
      <div className="flex">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 32 32"
          >
            <g fill="none">
              <path
                fill="#FFC83D"
                d="M11.406 6.156c-5.275-.65-7.156 2-8.062 3.219c-2.469 3.64-.985 7.64.812 9.563c0 0 10.094 9.828 10.375 10.093c.281.266.946 1.172 2.547.914c1.398-.225 1.797-1.914 1.797-1.914s1.032.842 2.516 0c1.156-.656 1.109-1.968 1.109-1.968s1.238.62 2.563-.5c1.192-1.01.453-2.782.453-2.782s1.07.176 1.828-.656c1.025-1.125.672-2.547 0-3.188L19.625 10.5l-.594-3.125l-7.625-1.219Z"
              />
              <path
                fill="#D67D00"
                d="m26.707 22.593l-2.226-2.257a.5.5 0 1 0-.712.703l1.764 1.788a1.415 1.415 0 0 0-.017-.046s.582.096 1.191-.188Zm-2.729 3.557l-2.31-2.563a.5.5 0 0 0-.743.67l1.66 1.841c.199.076.73.232 1.393.053Zm-3.402 2.201l-1.806-1.913a.5.5 0 1 0-.727.687l.904.957c.199.13.795.45 1.629.269Zm-2.173.702c-.759.203-2.167.266-3.137-.772l-.776.71l.041.04c.03.028.062.062.1.1c.328.34 1.01 1.046 2.447.814c.622-.1 1.046-.49 1.325-.892Z"
              />
              <path
                fill="#F59F00"
                d="M6.375 6.813c-1.688 2.166-4.287 7.775.313 11.625L5.24 19.992l-1.084-1.055C2.36 17.015.875 13.015 3.344 9.374l.04-.055c.525-.706 1.366-1.839 2.95-2.567l.041.06Z"
              />
              <path
                fill="#D67D00"
                d="M17.25 23.688c1.203 1.39-.3 3.162-1 3.906L5.669 16.584c1.974-2.002 3.278-2.203 4.16-1.334c.88.869.468 1.484.468 1.484s1.194-.678 2.453.563c1.26 1.241.39 2.187.39 2.187s1.3-.234 2.22.797c1.03 1.157.374 2.5.374 2.5s.79.068 1.516.907Z"
              />
              <path
                fill="#FFC83D"
                d="M12.438 8c3.234-1.297 8.14-1.953 10.39-1.984c1.531 0 3.481.37 5.547 2.796c3.3 3.875.828 8.297-1.125 10.094V17.5s-7.506-6.536-7.75-6.766c-.45-.425-2.302-.296-2.5-.234c-.604.188-1.65.5-3 1c-1.098.407-1.969.078-2.328-.766c-.36-.843-.842-2.09.765-2.734Z"
              />
              <path
                fill="#D67D00"
                d="M28.31 17.71a8.41 8.41 0 0 1-1.06 1.196c-2.76-2.406-8.378-7.325-8.828-7.75c-.45-.425-.974-.406-1.172-.344A78.71 78.71 0 0 0 13.75 12c-1.098.407-2.203-.422-2.563-1.266c-.328-.771-.355-1.879.872-2.556l.631-.277l.05-.019c-1.953 1.468-.228 3.261 1.385 3.056c.567-.073 1.5-.266 2.406-.5c.36-.094.713-.259 1.046-.414c.625-.293 1.18-.552 1.58-.243c1.5 1.165 5.976 4.968 9.154 7.929Z"
              />
              <path
                fill="#FFC83D"
                d="M8.82 16.879a2.203 2.203 0 0 0-3.09-.398L3.812 18.1c-.883.735-1.112 2.11-.467 3.002c.584.808 1.48 1.142 2.303.908c-.365.835-.334 1.903.367 2.49c.655.547 1.464.922 2.275.669c-.078.535.08 1.121.63 1.705c.52.551 1.276.826 2.087.643c-.107.572.074 1.208.743 1.853c.819.79 2.08.858 3.265-.23l.772-.9c.62-.78 1.478-2.136.196-3.288c-.443-.398-.952-.619-1.481-.62c.287-.7.282-1.558-.55-2.38c-.52-.513-1.157-.736-1.86-.568c.38-.808.371-1.633-.39-2.385c-.691-.683-1.543-1.007-2.643-.39c.194-.596.148-1.228-.24-1.731Z"
              />
              <path
                fill="#D67D00"
                d="M9.034 17.242L4.31 21.907c.418.186.873.229 1.31.112l3.469-3.426l-.029.016c.15-.459.156-.94-.026-1.367Zm3.212 2.584L6.96 25.085c.425.171.878.226 1.332.085l3.807-3.786l-.005.001c.245-.52.328-1.048.153-1.559Zm2.327 3.071l-4.918 4.498c.404.177.865.231 1.345.125l3.513-3.213c.17-.427.23-.912.06-1.41Z"
              />
            </g>
          </svg>

          <div className="flex flex-col">
            <p>Total Orders</p>
            <p>Sun, 01 Oct 2023</p>
          </div>
        </div>

        <div className="relative left-48 lg:left-20">
          <div className="absolute left-0 z-30">
            <svg
              height="40"
              width="40"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 362.626 362.626"
              xmlSpace="preserve"
            >
              <g id="XMLID_14_">
                <g id="XMLID_51_">
                  <g id="XMLID_911_">
                    <path
                      id="XMLID_912_"
                      fill="#C64832;"
                      d="M291.953,141.27c0,56.17-43.91,89.12-43.91,89.12l-66.73-56.72l-66.72,56.72
				c0,0-43.92-34.617-43.92-89.12c0-46.4,13.86-85.76,38.34-111.06c4.62-4.78,9.62-9.05,14.97-12.77
				C140.073,6.24,159.383,0,181.313,0c21.94,0,41.24,6.24,57.33,17.44c4.83,3.35,9.37,7.16,13.6,11.37
				C277.573,54.05,291.953,94.02,291.953,141.27z"
                    />
                  </g>
                  <path
                    id="XMLID_915_"
                    fill="#B2332D;"
                    d="M252.243,28.81c-4.23-4.21-8.77-8.02-13.6-11.37C222.553,6.24,203.253,0,181.313,0
			v173.67l66.73,56.72c0,0,43.91-32.95,43.91-89.12C291.953,94.02,277.573,54.05,252.243,28.81z"
                  />
                </g>
                <g id="XMLID_47_">
                  <g id="XMLID_916_">
                    <path
                      id="XMLID_917_"
                      fill="#F3D8B6;"
                      d="M209.642,184.476h-26.884h-1.256h-0.379h-1.256h-26.884
				c0,74.552-36.43,67.808-36.43,67.808c0,47.368,51.162,62.392,63.313,66.806v1.537c0,0,0.533-0.11,1.446-0.359
				c0.912,0.249,1.446,0.359,1.446,0.359v-1.537c12.151-4.414,63.313-19.439,63.313-66.806
				C246.072,252.284,209.642,259.028,209.642,184.476z"
                    />
                  </g>
                  <path
                    id="XMLID_918_"
                    fill="#EEC8A2;"
                    d="M209.642,184.476h-26.884h-1.256h-0.189v135.792
			c0.912,0.249,1.446,0.359,1.446,0.359v-1.537c12.151-4.414,63.313-19.439,63.313-66.806
			C246.072,252.284,209.642,259.028,209.642,184.476z"
                  />
                </g>
                <g id="XMLID_44_">
                  <path
                    id="XMLID_919_"
                    fill="#F3DBC4;"
                    d="M117.23,124.445c0.841,22.16,4.351,42.199,8.427,49.726
			c9.042,16.694,29.221,38.956,55.657,38.956c26.431,0,46.607-22.262,55.652-38.956c4.076-7.527,7.586-27.565,8.428-49.726
			L117.23,124.445L117.23,124.445z"
                  />
                  <path
                    id="XMLID_920_"
                    fill="#EDCEAE;"
                    d="M181.313,124.445v88.682c0.001,0,0.001,0,0.002,0
			c26.431,0,46.607-22.262,55.652-38.957c4.076-7.526,7.586-27.565,8.428-49.726L181.313,124.445L181.313,124.445z"
                  />
                </g>
                <g id="XMLID_41_">
                  <path
                    id="XMLID_921_"
                    fill="#FFFFFF;"
                    d="M247.898,62.164c-22.968-35.701-60.368-33.988-66.584-33.987
			c-6.213,0-43.62-1.715-66.585,33.987c-4.468,6.945-8.093,16.744-10.773,29.125l14.66,3.175
			c2.299-10.619,5.235-18.755,8.729-24.184c17.717-27.542,53.327-27.286,53.968-27.286c0.644,0,36.28-0.21,53.97,27.286
			c3.491,5.428,6.427,13.564,8.727,24.184l14.66-3.175C255.989,78.906,252.365,69.107,247.898,62.164z"
                  />
                  <path
                    id="XMLID_922_"
                    fill="#DEDDE0;"
                    d="M247.898,62.164c-22.968-35.701-60.368-33.988-66.584-33.987h-0.001v14.816
			c0.644,0,36.28-0.21,53.97,27.286c3.491,5.428,6.427,13.564,8.727,24.184l14.66-3.175
			C255.989,78.906,252.365,69.107,247.898,62.164z"
                  />
                </g>
                <g id="XMLID_34_">
                  <path
                    id="XMLID_38_"
                    fill="#367992;"
                    d="M298.29,362.625H64.335v-40.688c0-44.943,31.347-81.376,76.29-81.376l40.688,81.376
			l40.688-81.376c44.943,0,76.29,36.433,76.29,81.376v40.688H298.29z"
                  />
                  <path
                    id="XMLID_926_"
                    fill="#2F697E;"
                    d="M222.001,240.562l-40.688,81.375v40.688H298.29v-40.688
			C298.29,276.995,266.943,240.562,222.001,240.562z"
                  />
                </g>
                <g id="XMLID_15_">
                  <path
                    id="XMLID_927_"
                    fill="#FFFFFF;"
                    d="M222.577,238.39l-11,19.543l-30.23,57.536l-30.298-57.536l-9-19.543
			c-26.038,16.521-31.768,45.711-31.768,45.711l47.558,78.525h46.948l47.558-78.525C252.344,284.1,248.615,254.911,222.577,238.39z"
                  />
                  <path
                    id="XMLID_928_"
                    fill="#DEDDE0;"
                    d="M222.577,238.39l-11,19.543l-30.23,57.536l-0.034-0.064v47.22h23.474
			l47.558-78.525C252.344,284.1,248.615,254.911,222.577,238.39z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="absolute left-6 z-20">
            <svg
              height="40"
              width="40"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 362.626 362.626"
              xmlSpace="preserve"
            >
              <g id="XMLID_14_">
                <g id="XMLID_51_">
                  <g id="XMLID_911_">
                    <path
                      id="XMLID_912_"
                      fill="#C64832;"
                      d="M291.953,141.27c0,56.17-43.91,89.12-43.91,89.12l-66.73-56.72l-66.72,56.72
				c0,0-43.92-34.617-43.92-89.12c0-46.4,13.86-85.76,38.34-111.06c4.62-4.78,9.62-9.05,14.97-12.77
				C140.073,6.24,159.383,0,181.313,0c21.94,0,41.24,6.24,57.33,17.44c4.83,3.35,9.37,7.16,13.6,11.37
				C277.573,54.05,291.953,94.02,291.953,141.27z"
                    />
                  </g>
                  <path
                    id="XMLID_915_"
                    fill="#B2332D;"
                    d="M252.243,28.81c-4.23-4.21-8.77-8.02-13.6-11.37C222.553,6.24,203.253,0,181.313,0
			v173.67l66.73,56.72c0,0,43.91-32.95,43.91-89.12C291.953,94.02,277.573,54.05,252.243,28.81z"
                  />
                </g>
                <g id="XMLID_47_">
                  <g id="XMLID_916_">
                    <path
                      id="XMLID_917_"
                      fill="#F3D8B6;"
                      d="M209.642,184.476h-26.884h-1.256h-0.379h-1.256h-26.884
				c0,74.552-36.43,67.808-36.43,67.808c0,47.368,51.162,62.392,63.313,66.806v1.537c0,0,0.533-0.11,1.446-0.359
				c0.912,0.249,1.446,0.359,1.446,0.359v-1.537c12.151-4.414,63.313-19.439,63.313-66.806
				C246.072,252.284,209.642,259.028,209.642,184.476z"
                    />
                  </g>
                  <path
                    id="XMLID_918_"
                    fill="#EEC8A2;"
                    d="M209.642,184.476h-26.884h-1.256h-0.189v135.792
			c0.912,0.249,1.446,0.359,1.446,0.359v-1.537c12.151-4.414,63.313-19.439,63.313-66.806
			C246.072,252.284,209.642,259.028,209.642,184.476z"
                  />
                </g>
                <g id="XMLID_44_">
                  <path
                    id="XMLID_919_"
                    fill="#F3DBC4;"
                    d="M117.23,124.445c0.841,22.16,4.351,42.199,8.427,49.726
			c9.042,16.694,29.221,38.956,55.657,38.956c26.431,0,46.607-22.262,55.652-38.956c4.076-7.527,7.586-27.565,8.428-49.726
			L117.23,124.445L117.23,124.445z"
                  />
                  <path
                    id="XMLID_920_"
                    fill="#EDCEAE;"
                    d="M181.313,124.445v88.682c0.001,0,0.001,0,0.002,0
			c26.431,0,46.607-22.262,55.652-38.957c4.076-7.526,7.586-27.565,8.428-49.726L181.313,124.445L181.313,124.445z"
                  />
                </g>
                <g id="XMLID_41_">
                  <path
                    id="XMLID_921_"
                    fill="#FFFFFF;"
                    d="M247.898,62.164c-22.968-35.701-60.368-33.988-66.584-33.987
			c-6.213,0-43.62-1.715-66.585,33.987c-4.468,6.945-8.093,16.744-10.773,29.125l14.66,3.175
			c2.299-10.619,5.235-18.755,8.729-24.184c17.717-27.542,53.327-27.286,53.968-27.286c0.644,0,36.28-0.21,53.97,27.286
			c3.491,5.428,6.427,13.564,8.727,24.184l14.66-3.175C255.989,78.906,252.365,69.107,247.898,62.164z"
                  />
                  <path
                    id="XMLID_922_"
                    fill="#DEDDE0;"
                    d="M247.898,62.164c-22.968-35.701-60.368-33.988-66.584-33.987h-0.001v14.816
			c0.644,0,36.28-0.21,53.97,27.286c3.491,5.428,6.427,13.564,8.727,24.184l14.66-3.175
			C255.989,78.906,252.365,69.107,247.898,62.164z"
                  />
                </g>
                <g id="XMLID_34_">
                  <path
                    id="XMLID_38_"
                    fill="#367992;"
                    d="M298.29,362.625H64.335v-40.688c0-44.943,31.347-81.376,76.29-81.376l40.688,81.376
			l40.688-81.376c44.943,0,76.29,36.433,76.29,81.376v40.688H298.29z"
                  />
                  <path
                    id="XMLID_926_"
                    fill="#2F697E;"
                    d="M222.001,240.562l-40.688,81.375v40.688H298.29v-40.688
			C298.29,276.995,266.943,240.562,222.001,240.562z"
                  />
                </g>
                <g id="XMLID_15_">
                  <path
                    id="XMLID_927_"
                    fill="#FFFFFF;"
                    d="M222.577,238.39l-11,19.543l-30.23,57.536l-30.298-57.536l-9-19.543
			c-26.038,16.521-31.768,45.711-31.768,45.711l47.558,78.525h46.948l47.558-78.525C252.344,284.1,248.615,254.911,222.577,238.39z"
                  />
                  <path
                    id="XMLID_928_"
                    fill="#DEDDE0;"
                    d="M222.577,238.39l-11,19.543l-30.23,57.536l-0.034-0.064v47.22h23.474
			l47.558-78.525C252.344,284.1,248.615,254.911,222.577,238.39z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="absolute left-12 z-10">
            <svg
              height="40"
              width="40"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 362.626 362.626"
              xmlSpace="preserve"
            >
              <g id="XMLID_14_">
                <g id="XMLID_51_">
                  <g id="XMLID_911_">
                    <path
                      id="XMLID_912_"
                      fill="#C64832;"
                      d="M291.953,141.27c0,56.17-43.91,89.12-43.91,89.12l-66.73-56.72l-66.72,56.72
				c0,0-43.92-34.617-43.92-89.12c0-46.4,13.86-85.76,38.34-111.06c4.62-4.78,9.62-9.05,14.97-12.77
				C140.073,6.24,159.383,0,181.313,0c21.94,0,41.24,6.24,57.33,17.44c4.83,3.35,9.37,7.16,13.6,11.37
				C277.573,54.05,291.953,94.02,291.953,141.27z"
                    />
                  </g>
                  <path
                    id="XMLID_915_"
                    fill="#B2332D;"
                    d="M252.243,28.81c-4.23-4.21-8.77-8.02-13.6-11.37C222.553,6.24,203.253,0,181.313,0
			v173.67l66.73,56.72c0,0,43.91-32.95,43.91-89.12C291.953,94.02,277.573,54.05,252.243,28.81z"
                  />
                </g>
                <g id="XMLID_47_">
                  <g id="XMLID_916_">
                    <path
                      id="XMLID_917_"
                      fill="#F3D8B6;"
                      d="M209.642,184.476h-26.884h-1.256h-0.379h-1.256h-26.884
				c0,74.552-36.43,67.808-36.43,67.808c0,47.368,51.162,62.392,63.313,66.806v1.537c0,0,0.533-0.11,1.446-0.359
				c0.912,0.249,1.446,0.359,1.446,0.359v-1.537c12.151-4.414,63.313-19.439,63.313-66.806
				C246.072,252.284,209.642,259.028,209.642,184.476z"
                    />
                  </g>
                  <path
                    id="XMLID_918_"
                    fill="#EEC8A2;"
                    d="M209.642,184.476h-26.884h-1.256h-0.189v135.792
			c0.912,0.249,1.446,0.359,1.446,0.359v-1.537c12.151-4.414,63.313-19.439,63.313-66.806
			C246.072,252.284,209.642,259.028,209.642,184.476z"
                  />
                </g>
                <g id="XMLID_44_">
                  <path
                    id="XMLID_919_"
                    fill="#F3DBC4;"
                    d="M117.23,124.445c0.841,22.16,4.351,42.199,8.427,49.726
			c9.042,16.694,29.221,38.956,55.657,38.956c26.431,0,46.607-22.262,55.652-38.956c4.076-7.527,7.586-27.565,8.428-49.726
			L117.23,124.445L117.23,124.445z"
                  />
                  <path
                    id="XMLID_920_"
                    fill="#EDCEAE;"
                    d="M181.313,124.445v88.682c0.001,0,0.001,0,0.002,0
			c26.431,0,46.607-22.262,55.652-38.957c4.076-7.526,7.586-27.565,8.428-49.726L181.313,124.445L181.313,124.445z"
                  />
                </g>
                <g id="XMLID_41_">
                  <path
                    id="XMLID_921_"
                    fill="#FFFFFF;"
                    d="M247.898,62.164c-22.968-35.701-60.368-33.988-66.584-33.987
			c-6.213,0-43.62-1.715-66.585,33.987c-4.468,6.945-8.093,16.744-10.773,29.125l14.66,3.175
			c2.299-10.619,5.235-18.755,8.729-24.184c17.717-27.542,53.327-27.286,53.968-27.286c0.644,0,36.28-0.21,53.97,27.286
			c3.491,5.428,6.427,13.564,8.727,24.184l14.66-3.175C255.989,78.906,252.365,69.107,247.898,62.164z"
                  />
                  <path
                    id="XMLID_922_"
                    fill="#DEDDE0;"
                    d="M247.898,62.164c-22.968-35.701-60.368-33.988-66.584-33.987h-0.001v14.816
			c0.644,0,36.28-0.21,53.97,27.286c3.491,5.428,6.427,13.564,8.727,24.184l14.66-3.175
			C255.989,78.906,252.365,69.107,247.898,62.164z"
                  />
                </g>
                <g id="XMLID_34_">
                  <path
                    id="XMLID_38_"
                    fill="#367992;"
                    d="M298.29,362.625H64.335v-40.688c0-44.943,31.347-81.376,76.29-81.376l40.688,81.376
			l40.688-81.376c44.943,0,76.29,36.433,76.29,81.376v40.688H298.29z"
                  />
                  <path
                    id="XMLID_926_"
                    fill="#2F697E;"
                    d="M222.001,240.562l-40.688,81.375v40.688H298.29v-40.688
			C298.29,276.995,266.943,240.562,222.001,240.562z"
                  />
                </g>
                <g id="XMLID_15_">
                  <path
                    id="XMLID_927_"
                    fill="#FFFFFF;"
                    d="M222.577,238.39l-11,19.543l-30.23,57.536l-30.298-57.536l-9-19.543
			c-26.038,16.521-31.768,45.711-31.768,45.711l47.558,78.525h46.948l47.558-78.525C252.344,284.1,248.615,254.911,222.577,238.39z"
                  />
                  <path
                    id="XMLID_928_"
                    fill="#DEDDE0;"
                    d="M222.577,238.39l-11,19.543l-30.23,57.536l-0.034-0.064v47.22h23.474
			l47.558-78.525C252.344,284.1,248.615,254.911,222.577,238.39z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalOrders;
