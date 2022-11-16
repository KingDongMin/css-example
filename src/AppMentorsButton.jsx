import React, { memo, useMemo, useReducer } from 'react';
import { useCallback } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
    const [person, dispatch] = useReducer(personReducer, initialPerson);

    const handleUpdate = useCallback(() => {
        const prev = prompt('어떤멘토인가요?');
        const current = prompt('어떤이름으로 바꿀껀가요?');
        dispatch({ type: 'updated', prev, current });
    }, []);
    const handleAdd = useCallback(() => {
        const name = prompt('새로 추가할 멘토의 이름은?');
        const title = prompt('추가될 멘토의 직책은?');
        dispatch({ type: 'added', name, title });
    }, []);
    const handleDelete = useCallback(() => {
        const name = prompt('삭제할 멘토이름은?');
        dispatch({ type: 'deleted', name });
    }, []);
    return (
        <div>
            <h1>
                {person.name}은 {person.title}
            </h1>
            <p>{person.name}의 멘토들은?</p>
            <ul>
                {person.mentors.map((mento, index) => (
                    <li key={index}>
                        {mento.name}는 {mento.title}
                    </li>
                ))}
            </ul>
            <Button text="멘토이름바꾸기" onClick={handleUpdate}></Button>
            <Button text="멘토추가" onClick={handleAdd}></Button>
            <Button text="멘토삭제" onClick={handleDelete}></Button>
        </div>
    );
}

const Button = memo(({ text, onClick }) => {
    console.log('Button', text, 're-render');
    const result = useMemo(() => calculateSomething(), []);
    return <button onClick={onClick}>{`${text} ${result}`}</button>;
});

function calculateSomething() {
    for (let i = 0; i < 10000; i++) {
        console.log('연산호출');
    }
    return 10;
}

const initialPerson = {
    name: '동민',
    title: '신입개발자',
    mentors: [
        { name: '밥', title: '주니어개발자' },
        { name: '엘리', title: '시니어개발자' },
    ],
};
