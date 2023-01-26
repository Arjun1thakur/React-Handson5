import './contact.css'
function Contact(){
    return (
        <>
            <div className="card flex">
                <div className="top">
                <iframe id='iframe' title='okokokok' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57986767.11275318!2d97.64998941901247!3d27.493178356029194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1673958366832!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="bottom">
                    <form action="submit" method="get" className='flex'>
                        <div>
                            <label htmlFor="Name">Name : </label>
                            <input type="text" name="Name" id="input" placeholder='Arjun thakur'/><br />
                            <label htmlFor="E-mail">Email : </label>
                            <input type="email" name="E-mail" id="input" placeholder='sr.arjunthakur@gmail.com'/>
                            <button id='submit'><span><i className="fa-solid fa-paper-plane"> </i></span> Send</button>
                            
                        </div>
                        <div>
                            <label htmlFor="Message">Message</label><br />
                            <textarea name="message" id="textArea" cols="50" rows="12" placeholder='Message'></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Contact