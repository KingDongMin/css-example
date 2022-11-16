import React from 'react';

import { useImmer } from 'use-immer';

export default function AppMentorsImmer() {
    const [person, updatePerson] = useImmer(initialPerson);
    const handleUpdate = () => {
        const prev = prompt('어떤멘토인가요?');
        const current = prompt('어떤이름으로 바꿀껀가요?');
        updatePerson(person => {
            const mentor = person.mentors.find(m => m.name === prev);
            mentor.name = current;
        });
    };
    const handleAdd = () => {
        const name = prompt('새로 추가할 멘토의 이름은?');
        const title = prompt('추가될 멘토의 직책은?');
        updatePerson(person => {
            person.mentors.push({ name, title });
        });
    };
    const handleDelete = () => {
        const name = prompt('삭제할 멘토이름은?');
        updatePerson(person => {
            const index = person.mentors.findIndex(m => m.name === name);
            person.mentors.splice(index, 1);
        });
    };
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
            <button onClick={handleUpdate}>멘토이름 바꾸기</button>
            <button onClick={handleAdd}>멘토추가</button>
            <button onClick={handleDelete}>멘토삭제</button>
        </div>
    );
}

const initialPerson = {
    name: '동민',
    title: '신입개발자',
    mentors: [
        { name: '밥', title: '주니어개발자' },
        { name: '엘리', title: '시니어개발자' },
    ],
};
