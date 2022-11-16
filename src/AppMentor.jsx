import React from 'react';
import { useState } from 'react';

export default function AppMentor() {
    const [person, setPerson] = useState({
        name: '동민',
        title: '개발자',
        mentor: { name: '엘리', title: '시니어개발자' },
    });
    return (
        <div>
            <h1>
                {person.name}은 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는 {person.mentor.name}(
                {person.mentor.title})
            </p>
            <button
                onClick={() => {
                    const name = prompt('변경할 멘토 이름을 작성하시오.');
                    setPerson(prev => ({
                        ...prev,
                        mentor: { ...prev.mentor, name },
                    }));
                }}
            >
                멘토 이름 바꾸기
            </button>
            <button
                onClick={() => {
                    const title = prompt('변경할 멘토 타이틀을 작성하시오.');
                    setPerson(prev => ({
                        ...prev,
                        mentor: { ...prev.mentor, title },
                    }));
                }}
            >
                멘토 타이틀 바꾸기
            </button>
        </div>
    );
}
