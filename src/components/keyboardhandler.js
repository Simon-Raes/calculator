import { useEffect } from 'react';

export default function KeyboardHandler(props) {

    useEffect(() => {
        const onKeyDown = ({ key }) => {
            switch (key) {
                case "c":
                    props.onClearClicked();
                    break;
                case "+":
                    props.onPlusClicked();
                    break;
                case "-":
                    props.onMinusClicked();
                    break;
                case "/":
                    props.onDivideClicked();
                    break;
                case "*":
                    props.onMultiplyClicked();
                    break;
                case ".":
                    props.OnDecimalClicked();
                    break;
                case "Enter":
                    props.onEqualsClicked();
                    break;
                default:
                    if (!isNaN(key)) {
                        props.onNumberEntered(key);
                    }
            }
        }

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    });

    return null;
}