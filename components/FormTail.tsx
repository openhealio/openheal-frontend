import React from 'react'

interface Props {
  name: string,
  setName: (name: string) => void,
  indexes: number[],
  file: File,
  setFile: (file: File) => void,
  canSubmit: boolean,
  bgButton: string,
  bgButtonHover: string
}


export default function FormTail({ name, setName, indexes, file, setFile, canSubmit, bgButton, bgButtonHover }: Props): JSX.Element {

  async function handleUpload(event) {
    try {
      event.preventDefault();
      const uploadUrl = 'http://localhost:5000/upload'
      const data = new FormData()
      data.append('name', name)
      data.append('indexes', indexes.join(','))
      data.append('csv-file', file)

      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: data
      })

      const blob = await response.blob()

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'pdf-file.pdf');
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(url)
    }
    catch (err) {
      alert(err.message)
    }
  }

  return (
    <>
    <div className="mt-24">
      <div className="mt-5 md:col-span-2 md:mt-0">
        <form method="POST" onSubmit={handleUpload}>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={event => setName(event.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Choose S10.cvs file</label>
                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="csv-file"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>

                        <input
                          type="file"
                          id="csv-file"
                          onChange={event => setFile(event.target.files[0])}
                          accept=".csv"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    {!file && <p className="text-xs text-gray-500">S10.cvs file up to 10MB</p>}
                    {file && <p className="text-xs text-green-500">{file.name} selected</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                disabled={!canSubmit}
                type="submit"
                value="Upload"
                className={`
                    inline-flex 
                    justify-center
                    rounded-md
                    border
                    border-transparent
                    ${bgButton}
                    py-2
                    px-4
                    text-sm
                    font-medium
                    text-white
                    shadow-sm
                    hover:${bgButtonHover}
                    focus:outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                    focus:ring-offset-2
                  `}
              >
                Upload
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}