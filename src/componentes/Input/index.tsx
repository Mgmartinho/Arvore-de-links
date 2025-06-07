

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  

}

export function Input(props: InputProps) {
  return (
    <input 
        className='justify-center flex w-full text-center max-w-lg px-4 py-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors'
        {...props}
    />

  )
}
