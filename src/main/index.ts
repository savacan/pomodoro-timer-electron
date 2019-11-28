import {BrowserWindow, app, App} from 'electron';

class SampleApp {
    private mainWindow: BrowserWindow | null = null;

    private app: App;

    private mainURL = `file://${__dirname}/scripts/index.html`;

    public constructor(input: App) {
        this.app = input;
        this.app.on('window-all-closed', this.onWindowAllClosed.bind(this));
        this.app.on('ready', this.create.bind(this));
        this.app.on('activate', this.onActivated.bind(this));
    }

    private onWindowAllClosed(): void {
        this.app.quit();
    }

    private create(): void {
        this.mainWindow = new BrowserWindow({
            width: 800,
            height: 400,
            minWidth: 500,
            minHeight: 200,
            acceptFirstMouse: true,
            titleBarStyle: 'hidden',
        });

        this.mainWindow.loadURL(this.mainURL);

        this.mainWindow.on('closed', () => {
            this.mainWindow = null;
        });
    }

    private onReady(): void {
        this.create();
    }

    private onActivated(): void {
        if (this.mainWindow === null) {
            this.create();
        }
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MyApp: SampleApp = new SampleApp(app);
