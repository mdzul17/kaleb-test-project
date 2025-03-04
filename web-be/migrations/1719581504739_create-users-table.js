/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable(
        "users", {
            id: {
                type: 'VARCHAR(50)',
                unique: true,
                primaryKey: true,
            },
            username: {
                type: 'VARCHAR(100)',
                unique: true,
                notNull: true,
            },
            password: {
                type: 'VARCHAR(100)',
                notNull: true,
            },
            name: {
                type: 'VARCHAR(100)',
                notNull: true
            }
        }
    )
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
    pgm.dropTable("users")
};
