/*
    도서정보 등록 및 조회

    도서명, 저자명, 출판사명 입력받은 후
    bookList에 저장

    table
    tbody
    tr
    td

    components두개로 나눈다.(등록, 조회)

    + 검색 시 도서명
    + input select해서 검색조건을 다르게 하기 filter 조건식
*/
import React from 'react';

function App7(props) {
    return (
        <div>
            <select name="" id="">
                <option value="">도서명</option>
                <option value="">저자명</option>
                <option value="">출판사명</option>
                <option value="">카테고리</option>
            </select>
            <input type="text" />
        </div>
    );
}

export default App7;