'use strict';

/**
 * Provides a convenient interface for data transport.
 * @interface
 */
class Transport {

	/**
	 * Sends a message for the specified client.
	 * @param {!ClientRequest} clientRequest
	 * @return {!Promise} Deferred request.
	 */
	send() {}

}

export default Transport;
