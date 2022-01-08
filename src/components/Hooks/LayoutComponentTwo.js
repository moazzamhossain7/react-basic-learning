import useWindowWidth from './useWindowWidth';

export default function LayoutComponentTwo() {
    const onSmallScreen = useWindowWidth(600);

    return (
        <div className={onSmallScreen ? 'small' : 'large'}>
            <h2>You are on another screen!</h2>
        </div>
    );
}
