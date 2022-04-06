import Link from 'next/link'

export default function TestNext() {
  return (
    <>
      <h5>First Post</h5>
      <h5>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h5>
    </>
  )
}