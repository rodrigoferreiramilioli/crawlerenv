/**
 * @swagger
 *
 * /{route}:
 *   post:
 *     summary: Request call mercado livre
 *     description: Envio
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         type: string
 *         in: body
 *         required: true
 *         example: {"name" : "cadeado"}
 *       - name: limit
 *         type: string
 *         in: body
 *         required: true
 *         example: {"limit" : "10"}
 */