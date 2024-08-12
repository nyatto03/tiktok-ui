import { forwardRef, useState } from "react";
import images from "~/assets/images";
import styles from './Image.module.scss'
import classNames from "classnames";

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    // Khởi tạo state fallback với giá trị hình ảnh fallback mặc định
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        // Cập nhật src thành hình ảnh fallback khi có lỗi
        setFallback(images.noImage);
    };

    return (
        <img
            ref={ref}
            {...props}
            alt={alt}
            src={fallback || src}
            className={classNames(styles.wrapper, className)}
            onError={handleError}
        />
    );
});

export default Image;
