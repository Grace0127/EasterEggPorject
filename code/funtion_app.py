import logging
import azure.functions as func

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.route(route="clickCounter")

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('📥 收到一個點擊請求')

    return func.HttpResponse(
        '---測試成功!---',
        status_code=200,
        mimetype="application/json"
    )
    