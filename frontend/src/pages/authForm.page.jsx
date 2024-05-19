import InputBox from "../components/input.component";

import mailIcon from "../icons/mail.svg"
import keyIcon from "../icons/key.svg"
import AnimationWrapper from "../common/page-animation";

const AuthForm = ({type}) => {
    return (
        <AnimationWrapper keyValue={type}>
            <section className="h-cover flex items-center justify-center">
                <form action="" method="" className="w-[80%] max-w-[400px]">
                    <h1 className="text-4xl font-gelasio capitalize text-center mb-10">sign in</h1>

                    <InputBox name="email" type="email" id="" value="" placeholder="Email" icon={mailIcon} />
                    <InputBox name="password" type="password" id="" value="" placeholder="Password" icon={keyIcon} />

                    <button type="submit" className="btn-dark center mt-14">{type.replace("-", " ")}</button>



                </form>
            </section>
        </AnimationWrapper>
    )
}

export default AuthForm;