import { useRef } from "react";
import { useDispatch } from "react-redux";
import { UserService } from "../../../../../../data/entities/user/service/UserService.ts";

const AvatarUpload = () => {
    const dispatch = useDispatch();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        fileInputRef.current?.click(); // 👈 программно нажимаем на input
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            UserService.uploadAvatar(dispatch, file); // 👈 передаём файл
        }
    };

    return (
        <div>
            <button onClick={handleClick}>
                <span>Спалить свое хлебало</span>
            </button>

            {/* 👇 скрытый input для выбора файла */}
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
        </div>
    );
};

export default AvatarUpload;
