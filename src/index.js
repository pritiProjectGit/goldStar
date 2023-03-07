import app from "./app";
import "./utils/mongoose";
import { engine } from 'express-handlebars';


app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.listen(app.get("port"));

console.log(`server on port ${app.get("port")}`);
