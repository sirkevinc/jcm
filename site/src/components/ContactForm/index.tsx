import 'antd/dist/antd.css';
import React from "react";
import { Row, Col, Button, Form, Input } from "antd"
import { UserOutlined, MailOutlined } from "@ant-design/icons"
const { TextArea } = Input

function encode(data: any) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
}

const ContactForm = () => {
    const formName = "contact"

    const handleSubmit = (values: any) => {
        if (values['bot-field'] === undefined) {
            delete values['bot-field']
        }

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded"},
            body: encode({
                "form-name": formName,
                ...values,
            })
        })
            .then(() => showSuccess())
            .catch(error => showError(error))
    }

    const showSuccess = () => {
        console.log("Form successfully submitted")
    }

    const showError = (error: string) => {
        console.error(`There was an error submitting form: ${error}`);
    }

    return (
        <Row
            justify="space-around"
        >
            <Col
                xs={22}
                sm={18}
                md={16}
                lg={8}
            >
                <Form
                    name="contactForm"
                    method="post"
                    onFinish={handleSubmit}
                    layout="vertical"
                >
                    <Form.Item
                        label="Don't fill this out"
                        className={"hidden"}
                        style={{ display: "none" }}
                        name="bot-field"
                    >
                        <Input type={"hidden"} />
                    </Form.Item>

                    <Form.Item
                        label="Name"
                        rules={[{ required: true, message: "Please enter your name." }]}
                        name="name"
                    >
                        <Input 
                            placeholder="Name"
                            prefix={<UserOutlined className="contact-form-item-icon" />}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        rules={[{ required: true, message: "Please enter your email" }]}
                        name="email"
                    >
                        <Input 
                            placeholder="Email"
                            prefix={<MailOutlined className="contact-form-item-icon" />}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Message"
                        rules={[{ required: true, message: "Please enter your message" }]}
                        name="message"
                    >
                        <TextArea 
                            placeholder="Message"
                            rows={5}    
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={false}>
                            Submit
                        </Button>
                    </Form.Item>

                </Form>
                <form
                    name={formName}
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    hidden
                >
                    <input type="text" name="name" />
                    <input type="email" name="email" />
                    <textarea name="message"></textarea>
                </form>
            </Col>
        </Row>
    )
}

export default ContactForm