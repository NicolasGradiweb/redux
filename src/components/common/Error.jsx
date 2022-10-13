import '../../styles/error.css'

const Error = ({error, text}) => {
  return (
    <section className="error">
      <h2>{`Oops! there was en error in ${text} :(`}</h2>
      <p>{ error }</p>
      <p>Try reloading</p>
    </section>
  )
}

export default Error