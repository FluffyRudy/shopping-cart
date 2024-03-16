export default function Contact() {
  return (
    <div
      className='flex flex-col justify-evenly font-bold'
      style={{ width: "min(600px, 80vw)", minHeight: "90vh", margin: "auto" }}>
      <div>
        <h1 className='text-2xl font-bold text-white'>Contact Us</h1>
        <p className='mt-1 text-white'>
          We're always ready to help you with any questions or concerns you
          might have about our products. Please feel free to reach out to us
          through any of the following methods:
        </p>
      </div>

      <div>
        <h2 className='mt-1 text-xl font-semibold text-white'>Social Media</h2>
        <p className='mt-1 text-white'>
          Follow us on our social media platforms for the latest updates and
          promotions:
        </p>
        <ul className='list-disc list-inside mt-1 text-white'>
          <li>
            <a
              href='https://github.com/FluffyRudy'
              target='_blank'
              className='text-blue-600 hover:underline'>
              Github
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/@CodeRudy'
              target='_blank'
              className='text-blue-600 hover:underline'>
              Youtube
            </a>
          </li>
        </ul>
      </div>

      <p className='text-center mt-1 text-white text-3xl'>
        We look forward to hearing from you!
      </p>
    </div>
  );
}
