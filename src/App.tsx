import React, { useState } from "react";
import Badge from "@/components/Badge";
import Date from "@/components/UI/Date";
import Input from "@/components/UI/Input";
import Radio from "@/components/UI/Radio";
import Counter from "@/components/Counter";
import Button from "@/components/UI/Button";
import Number from "@/components/UI/Number";
import Switch from "@/components/UI/Switch";
import PinInput from "@/components/PinInput";
import Paginate from "@/components/Paginate";
import Tooltip from "@/components/UI/Tooltip";
import Checkbox from "@/components/UI/Checkbox";
import Password from "@/components/UI/Password";
import Typography from "@/components/UI/Typography";
import useToggle from "@/hooks/useToggle";
import Search from "@/components/UI/Search";
import styles from "./App.module.sass";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, expedita";

function App() {
    const [page, setPage] = useState(0);
    const [count, setCount] = useState(0);
    const [online, toggle] = useToggle(false);
    const [checked, setChecked] = useState(true);
    const [input, setInput] = useState({
        search: "",
        gender: "Male",
        phone: undefined,
        date: "29.07.2000",
        password: "qwerty",
        fullName: "Чайковский К.А.",
    });
    const [cars, setCars] = useState({
        mercedes: false,
        volkswagen: true,
    });

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setInput((prev) => ({ ...prev, [name]: value }));
    };

    const onHandleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;

        setCars((prev) => ({ ...prev, [name]: checked }));
    };

    return (
        <div className={styles.app}>
            <Typography color="secondary">
                App is running in {import.meta.env.MODE} mode
            </Typography>
            <Paginate
                pageCount={25}
                forcePage={page}
                onPageChange={({ selected }) => setPage(selected)}
            />
            <div className={styles.flex}>
                <Input
                    label="ФИО"
                    name="fullName"
                    value={input.fullName}
                    onChange={onHandleChange}
                    placeholder="Чайковский К.А."
                />
                <Number
                    name="phone"
                    value={input.phone}
                    label="Номер телефона"
                    onChange={onHandleChange}
                    format="+373 (###) #####"
                    placeholder="+373 (###) #####"
                />
                <Date
                    name="date"
                    label="Дата"
                    value={input.date}
                    placeholder="дд.мм.гггг"
                    onChange={onHandleChange}
                />
                <Password
                    label="Пароль"
                    name="password"
                    value={input.password}
                    onChange={onHandleChange}
                />
                <Search
                    name="search"
                    label="Поиск..."
                    value={input.search}
                    onChange={onHandleChange}
                    onEnter={() => console.log("Enter!")}
                    onSearch={() => console.log("Search!")}
                />
            </div>
            <PinInput
                autoFocus
                length={6}
                onComplete={(value) => {
                    // Here you can make asynchronous requests to your API for verification.
                    console.log(`Done! Your code: ${value}`);
                }}
            />
            <div className={styles.flex}>
                <Tooltip text={lorem}>
                    <Button loading disabled>Hover me</Button>
                </Tooltip>
                <Badge
                    color={online ? "green" : "red"}
                    content={online ? "Online" : "Offline"}
                >
                    <Button interval={500} onClick={toggle}>Click me</Button>
                </Badge>
            </div>
            <Counter
                count={count}
                className={styles.counter}
                onChange={(number) => setCount(number)}
            />
            <Switch
                checked={checked}
                className={styles.switch}
                onChange={(event) => {
                    setChecked(event.target.checked);
                }}
            />
            <div>
                <Radio
                    label="Male"
                    value="Male"
                    name="gender"
                    onChange={onHandleChange}
                    checked={input.gender === "Male"}
                />
                <Radio
                    name="gender"
                    label="Female"
                    value="Female"
                    onChange={onHandleChange}
                    checked={input.gender === "Female"}
                />
            </div>
            <div>
                <Checkbox
                    name="volkswagen"
                    label="Volkswagen"
                    onChange={onHandleCheck}
                    checked={cars.volkswagen}
                />
                <Checkbox
                    name="mercedes"
                    label="Mercedes"
                    checked={cars.mercedes}
                    onChange={onHandleCheck}
                />
            </div>
        </div>
    );
}

export default App;
