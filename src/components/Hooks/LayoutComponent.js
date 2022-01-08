import useWindowWidth from './useWindowWidth';

export default function LayoutComponent() {
    const onSmallScreen = useWindowWidth(750);

    return (
        <div>
            <h2>You are browing on {onSmallScreen ? 'small' : 'large'} screen!</h2>
        </div>
    );
}
