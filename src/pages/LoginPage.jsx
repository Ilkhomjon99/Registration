import { Input } from "../components/input/input"
import { Heading } from "../components/heading"

export const LoginPage = () => {
    return (
        <>
        <Heading text="Sign Up"/>
      <form action=''/>
      <Input InputPlaceholder={'Username'} InputType={'text'}/>
      <br/>
      <Input InputPlaceholder={'E-mail'} InputType={'text'}/>
      <br/>
      <Input InputPlaceholder={'Password'} InputType={'password'}/>
      <br/>
      <button>Sign Up</button>
        </>
    )
}       