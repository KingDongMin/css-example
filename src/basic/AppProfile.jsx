import './App.css';
import Avartar from './components/Avartar';
import Profile from './components/Profile';

function AppProfile() {
    const handleClick = event => {
        console.log(event);
        alert('버튼클릭');
    };
    return (
        <>
            <button onClick={handleClick}>버튼</button>

            <Avartar
                image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                isNew={true}
            />
            <Profile
                image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                name="김춘식"
                title="망원동 짱뚱어탕 사장"
                isNew={true}
            />
            <Profile
                image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
                name="박춘자"
                title="마장동 한우식육식당 사장"
            />
            <Profile
                image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                name="이상엽"
                title="풍암동 베트남쌀국수 사장"
            />
        </>
    );
}

export default AppProfile;
