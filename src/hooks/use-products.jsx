import { useEffect } from 'react';
import { useState } from 'react';

export default function useProducts({ salesOnly }) {
    const [products, setProducts] = useState([]);

    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(undefined);
        fetch(`data/${salesOnly ? 'sle_' : ''}products.json`)
            .then(res => res.json())
            .then(data => {
                console.log('데이터를 네트워크에서 받아옴');
                setProducts(data);
            })
            .catch(error => {
                console.log('Error :', error);
                setError('에러났슈');
            })
            .finally(() => setLoading(false));
        return () => {
            console.log('깨끗하게 청소하는 일들을 합니다.');
        };
    }, [salesOnly]);

    return [loading, error, products];
}
