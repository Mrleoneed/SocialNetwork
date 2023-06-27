import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img
                    src="https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo-1080x608.png"
                    alt="Image"/>
            </header>

            <nav className={'nav'}>
                <div>
                    <a>Профиль</a>
                </div>
                <div>
                    <a>Сообщения</a>
                </div>
                <div>
                    <a>Новости</a>
                </div>
                <div>
                    <a>Музыка</a>
                </div>
                <div>
                    <a>Настройки</a>
                </div>
            </nav>
            <div className={'content'}>
                Контент
                <div>
                    <img
                        src="https://abrakadabra.fun/uploads/posts/2022-02/1646004561_17-abrakadabra-fun-p-fon-dlya-oblozhki-vk-19.jpg"
                        alt="content"/>
                </div>
                <div>
                    AVATAR
                </div>
                <div>
                    My Posts
                    <div>
                        NEW POST
                    </div>
                    <div>
                        <div>post1</div>
                        <div>post2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
