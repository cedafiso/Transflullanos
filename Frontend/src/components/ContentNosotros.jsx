import React from "react";

const ContentNosotros = () => {
    const style = {
        'text-align': 'justify',
        'color': 'white'
    };
    return (
        <div class="content-nosotros">
            <section id="hero-about"></section>
            <div class="background-about content-about-all"></div>
            <div class="content-all content-about-all">
                <div class="content-about">
                    <br />
                    <br />
                    <h1>Misión</h1>
                    <hr />
                    <p style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident aspernatur excepturi itaque dolore quia unde quaerat laboriosam deleniti? Recusandae, modi aspernatur. Dignissimos tenetur maiores veniam ratione consequuntur asperiores perferendis!</p><br />
                    <p style={style}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa quaerat, reiciendis laborum ullam doloremque ea laboriosam nostrum! Minus quae tempora beatae blanditiis autem quidem soluta, perspiciatis numquam rem! Nihil.</p><br />
                </div>
                <div class="content-about">
                    <br />
                    <br />
                    <h1>Visión</h1>
                    <hr />
                    <p style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error debitis explicabo facere, dolore distinctio ipsam temporibus molestias tempora ex consectetur illum tempore fuga totam voluptatum nobis voluptas neque officia!</p><br />
                    <p style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident aspernatur excepturi itaque dolore quia unde quaerat laboriosam deleniti? Recusandae, modi aspernatur. Dignissimos tenetur maiores veniam ratione consequuntur asperiores perferendis!</p><br />
                </div>
                <div class="content-about">
                    <br />
                    <br />
                    <h1>Recorrido</h1>
                    <hr />
                    <p style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa quaerat, reiciendis laborum ullam doloremque ea laboriosam nostrum! Minus quae tempora beatae blanditiis autem quidem soluta, perspiciatis numquam rem! Nihil.</p><br />
                    <p style={style}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error debitis explicabo facere, dolore distinctio ipsam temporibus molestias tempora ex consectetur illum tempore fuga totam voluptatum nobis voluptas neque officia!</p><br />
                </div>
            </div>
        </div>
    );
}

export default ContentNosotros;