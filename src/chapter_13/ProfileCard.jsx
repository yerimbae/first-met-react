import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title="NAME name" backgroundColor="#4ea04e">
            <p>안녕하세요. 이름 입니다.</p>
            <p>저는 리액트를 사용해서 개발을 하고 있습니다.</p>
        </Card>
    );
}

export default ProfileCard;