const registerMail = (name)=>
` Dear ${name},

We hope this message finds you well. We have received your request for access to the student portal at Jamia University. We appreciate your interest in utilizing our online resources, and we are currently in the process of verifying your details.

Once your details have been successfully verified, you will be granted access to the student portal, where you can access a wide range of educational resources and information. We understand the importance of timely access to these resources and will strive to expedite the verification process as much as possible.

In the meantime, we kindly ask for your patience and understanding as our dedicated team works diligently to ensure the security and accuracy of your access. Rest assured that we are committed to providing you with a seamless and efficient experience on our student portal.

If you have any urgent queries or require assistance during this period, please do not hesitate to contact our support team at [support@email.com] or [phone number]. They will be more than happy to assist you.

Thank you for choosing Jamia University for your educational journey. We look forward to welcoming you to the student portal soon.

Best regards,

Farman Tasleem`


const requestApproved=(studentName)=>{
    return `

    Dear ${studentName},
    
    We are pleased to inform you that your request for access to the student portal has been accepted. You can now access the student portal using your credentials
    
    The student portal is your gateway to a wealth of educational resources, course materials, and important information. We encourage you to explore the portal and make the most of the resources available to enhance your academic journey.
    
    If you have any questions, encounter any issues, or require assistance with your student portal access, please do not hesitate to reach out to our support team at [support@email.com] or [phone number]. We are here to assist you and ensure a smooth experience.
    
    Thank you for choosing Jamia University, and we wish you a successful and enriching academic experience through our student portal.
    
    Best regards,
    Jamia University`
}

module.exports = {
    registerMail,
    requestApproved
}