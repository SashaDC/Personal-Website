export default function Contact() {
  // Contact page content
  // Needs: contact details, new navbar
  // details: phone number, email, social media links(github, linkedin)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">Contact</h1>
      <p>
        If you have any questions or would like to get in touch, feel free to
        reach out!
      </p>
      {/* gonna make these clickable icons that link to the respective platforms later */}
      <p>email: sasha@example.com</p>
      <p>github: github.com/sasha</p>
      <p>linkedin: linkedin.com/in/sasha</p>
    </div>
  )
}
