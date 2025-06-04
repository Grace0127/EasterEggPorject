import logging
import azure.functions as func

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('📥 收到一個點擊請求')

    return func.HttpResponse(
        '成功',
        status_code=200,
        mimetype="application/json"
    )